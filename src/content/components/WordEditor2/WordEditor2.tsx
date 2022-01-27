import React from 'react'

export const WordEditor2 = props => {
  const { word = {} } = props
  const formChanged = () => {}
  const stopPropagation = () => {}
  // const { t } = useTranslate(['common', 'content'])
  const t = w => w
  const setShowCtxTransList = (flag: boolean) => {}
  return (
    <div>
      <div className="wordEditorNote-Container">
        <div className="wordEditorNote">
          <label htmlFor="wordEditorNote_Word">{t('note.word')}</label>
          <input
            type="text"
            name="text"
            id="wordEditorNote_Word"
            value={word.text}
            onChange={formChanged}
            onKeyDown={stopPropagation}
          />
          <label htmlFor="wordEditorNote_Context">{t('note.context')}</label>
          <textarea
            rows={3}
            name="context"
            id="wordEditorNote_Context"
            value={word.context}
            onChange={formChanged}
            onKeyDown={stopPropagation}
          />
          <div className="wordEditorNote_LabelWithBtn">
            <label htmlFor="wordEditorNote_Trans">
              {t('note.trans')}
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
              {t('content:wordEditor.chooseCtxTitle')}
            </button>
          </div>
          <textarea
            rows={10}
            name="trans"
            id="wordEditorNote_Trans"
            value={word.trans}
            onChange={formChanged}
            onKeyDown={stopPropagation}
          />
          <p className="wordEditorNote_Help">
            {t('content:wordEditor.ctxHelp')}
          </p>
          <label htmlFor="wordEditorNote_Note">{t('note.note')}</label>
          <textarea
            rows={5}
            name="note"
            id="wordEditorNote_Note"
            value={word.note}
            onChange={formChanged}
            onKeyDown={stopPropagation}
          />
          <label htmlFor="wordEditorNote_SrcTitle">{t('note.srcTitle')}</label>
          <input
            type="text"
            name="title"
            id="wordEditorNote_SrcTitle"
            value={word.title}
            onChange={formChanged}
            onKeyDown={stopPropagation}
          />
          <label htmlFor="wordEditorNote_SrcLink">{t('note.srcLink')}</label>
          <input
            type="text"
            name="url"
            id="wordEditorNote_SrcLink"
            value={word.url}
            onChange={formChanged}
            onKeyDown={stopPropagation}
          />
          <label htmlFor="wordEditorNote_SrcFavicon">
            {t('note.srcFavicon')}
            {word.favicon ? (
              <img
                className="wordEditorNote_SrcFavicon"
                src={word.favicon}
                alt={t('note.srcTitle')}
              />
            ) : null}
          </label>
          <input
            type="text"
            name="favicon"
            id="wordEditorNote_SrcFavicon"
            value={word.favicon}
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
    </div>
  )
}
