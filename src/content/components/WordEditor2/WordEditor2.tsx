import React, { useState } from 'react'
import WordEditorPanel from '../WordEditor/WordEditorPanel'
export const WordEditor2 = props => {
  const [word, setWord] = useState(props.wordEditor.word || {})
  const formChanged = ({
    currentTarget
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // setDirty(true)
    setWord({
      ...word,
      [currentTarget.name]: currentTarget.value
    })
  }
  const stopPropagation = () => {}
  // const { t } = useTranslate(['common', 'content'])
  const t = w => w
  const panelBtns: any = [
    {
      type: 'normal',
      title: t('cancel'),
      onClick: props.onClose
    },
    {
      type: 'primary',
      title: t('save'),
      onClick: () => {
        console.log('save')
        // saveWord('notebook', word)
        //   .then(props.onClose)
        //   .catch(console.error)
      }
    }
  ]
  const setShowCtxTransList = (flag: boolean) => {}
  return (
    <WordEditorPanel
      containerWidth={props.containerWidth}
      title={'保存到生词本'}
      btns={panelBtns}
      onClose={props.onClose}
      style={{ background: '#fff' }}
    >
      <div className="wordEditorNote-Container">
        <div className="wordEditorNote">
          <label htmlFor="wordEditorNote_Word">单词</label>
          <input
            type="text"
            name="text"
            id="wordEditorNote_Word"
            value={word.text}
            onChange={formChanged}
            onKeyDown={stopPropagation}
          />
          <label htmlFor="wordEditorNote_Word_Symbol">音标</label>
          <input
            type="text"
            name="symbol"
            id="wordEditorNote_Word_Symbol"
            value={word.symbol}
            onChange={formChanged}
            onKeyDown={stopPropagation}
          />
          <label htmlFor="wordEditorNote_Word_Trans">基本释义</label>
          <input
            type="text"
            name="trans"
            id="wordEditorNote_Word_Trans"
            value={word.trans}
            onChange={formChanged}
            onKeyDown={stopPropagation}
          />
          <label htmlFor="wordEditorNote_Word_Img">图片</label>
          <input
            type="text"
            name="img"
            id="wordEditorNote_Word_Img"
            value={word.img}
            onChange={formChanged}
            onKeyDown={stopPropagation}
          />
          <img src={word.img} alt="图片" />
          <label htmlFor="wordEditorNote_Example">例句</label>
          <textarea
            rows={3}
            name="example"
            id="wordEditorNote_Example"
            value={word.example}
            onChange={formChanged}
            onKeyDown={stopPropagation}
          />
          <div className="wordEditorNote_LabelWithBtn">
            <label htmlFor="wordEditorNote_Example_Trans">
              例句翻译
              <a
                href="https://saladict.crimx.com/q&a.html#%E9%97%AE%EF%BC%9A%E6%B7%BB%E5%8A%A0%E7%94%9F%E8%AF%8D%E5%8F%AF%E4%B8%8D%E5%8F%AF%E4%BB%A5%E5%8A%A0%E5%85%A5%E5%8D%95%E8%AF%8D%E7%BF%BB%E8%AF%91%EF%BC%88%E8%80%8C%E4%B8%8D%E6%98%AF%E7%BF%BB%E8%AF%91%E6%95%B4%E5%8F%A5%E4%B8%8A%E4%B8%8B%E6%96%87%EF%BC%89%E3%80%82"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                {' '}
                Why?
              </a>
            </label>
            <button onClick={() => setShowCtxTransList(true)}>
              选择翻译结果
            </button>
          </div>
          <textarea
            rows={10}
            name="exampleTrans"
            id="wordEditorNote_Example_Trans"
            value={word.exampleTrans}
            onChange={formChanged}
            onKeyDown={stopPropagation}
          />
        </div>
        {/* {relatedWords && relatedWords.length > 0 && (
          <WordCards
            words={relatedWords}
            onCardDelete={word => {
              if (window.confirm(t('content:wordEditor.deleteConfirm'))) {
                deleteWords('notebook', [word.date]).then(getRelatedWords)
              }
            }}
          />
        )} */}
      </div>
    </WordEditorPanel>
  )
}
