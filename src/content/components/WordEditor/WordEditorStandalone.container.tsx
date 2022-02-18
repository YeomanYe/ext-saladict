import { connect } from 'react-redux'
import { MapStateToProps } from 'react-retux'
import { StoreState } from '@/content/redux/modules'
import { WordEditor, WordEditorProps } from './WordEditor'
import { WordEditor2 } from '../WordEditor2'
const onClose = () => {
  window.close()
}

const mapStateToProps: MapStateToProps<
  StoreState,
  WordEditorProps
> = state => ({
  darkMode: state.config.darkMode,
  containerWidth: window.innerWidth,
  ctxTrans: state.config.ctxTrans,
  wordEditor: state.wordEditor,
  onClose
})

export const WordEditorStandaloneContainer = connect(mapStateToProps)(
  WordEditor
)

const mapStateToProps2: MapStateToProps<StoreState, any> = state => ({
  darkMode: state.config.darkMode,
  containerWidth: window.innerWidth,
  ctxTrans: state.config.ctxTrans,
  wordEditor: state.wordEditor2,
  onClose
})

export const WordEditor2StandaloneContainer = connect(mapStateToProps2)(
  WordEditor2
)

// export default WordEditorStandaloneContainer
export default WordEditor2StandaloneContainer
