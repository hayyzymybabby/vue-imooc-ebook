const book = {
  state: {
    fileName: '',
    menuVisible: false,
    settingVisible: -1, // -1：不显示， 0：字号和字体， 1：主题设置，2：进度条， 3：目录
    defaultFontSize: 16
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_MENUVISIBLE: (state, menuVisible) => {
      state.menuVisible = menuVisible
    },
    SET_SETTINGVISIBLE: (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    SET_DEFAULTFONTSIZE: (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    }
  }
}

export default book
