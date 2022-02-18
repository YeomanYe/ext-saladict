import getDefaultConfig from '@/app-config'
import { newWord, newWord2 } from '@/_helpers/record-manager'
import {
  mockRuntimeMessage,
  withi18nNS, withLocalStyle,
  withSideEffect
} from '@/_helpers/storybook'
import { action } from '@storybook/addon-actions'
import { boolean, number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import faker from 'faker'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withPropsTable } from 'storybook-addon-react-docgen'
import WordEditorPortal from '../WordEditor/WordEditor.portal'
import { WordEditor2 } from './WordEditor2'

storiesOf('Content Scripts|WordEditor', module)
  .addDecorator(withPropsTable)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(
    withSideEffect(
      mockRuntimeMessage(async message => {
        action(message.type)(message['payload'])
        switch (message.type) {
          case 'GET_WORDS_BY_TEXT':
            return faker.random.boolean()
              ? [
                  newWord({
                    date: faker.date.past().valueOf(),
                    text: message.payload.text,
                    context: faker.lorem.sentence(),
                    title: faker.random.word(),
                    url: faker.internet.url(),
                    favicon: faker.image.imageUrl(),
                    trans: faker.lorem.sentence(),
                    note: faker.lorem.sentences()
                  })
                ]
              : []
        }
      })
    )
  )
  .addDecorator(withi18nNS(['common', 'content']))
  .add(
    'WordEditor2',
    () => {
      // const config = getDefaultConfig()
      // const darkMode = boolean('Dark Mode', false)

      return (
        <WordEditor2
          wordEditor={{
            word: newWord2({
              date: faker.date.past().valueOf(),
              text: faker.random.word(),
              trans: faker.lorem.sentence(),
              example: faker.lorem.sentence(),
              exampleTrans: faker.lorem.sentence(),
              img: faker.image.imageUrl(),
              symbol: faker.lorem.sentence()
            }),
            translateCtx: false
          }}
        />
      )
    },
    {
      decorators: [withLocalStyle(require('../WordEditor/WordEditor.scss'))],
      jsx: { skip: 1 }
    }
  )
  .add('WordEditorPortal2', () => {
    const config = getDefaultConfig()
    const darkMode = boolean('Dark Mode', false)

    return (
      <WordEditorPortal
        show={boolean('Show', true)}
        darkMode={darkMode}
        withAnimation={boolean('With Animation', true)}
        containerWidth={number('Panel X', 450 + 100)}
        wordEditor={{
          word: newWord({
            date: faker.date.past().valueOf(),
            text: faker.random.word(),
            context: faker.lorem.sentence(),
            title: faker.random.word(),
            url: faker.internet.url(),
            favicon: faker.image.imageUrl(),
            trans: faker.lorem.sentence(),
            note: faker.lorem.sentences()
          }),
          translateCtx: false
        }}
        ctxTrans={config.ctxTrans}
        onClose={action('Close')}
      />
    )
  })
