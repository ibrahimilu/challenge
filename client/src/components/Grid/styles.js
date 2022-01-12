const BORDER_STYLE = {
  borderColor: 'rgba(224, 224, 224, 1)',
  borderStyle: 'solid'
}
const GridStyles = {
  container: {
    display: 'table',
    width: '100%',
    minWidth: '100px',
    borderCollapse: 'collapse',
    borderSpacing: '0'
  },

  thead : {
    color: 'rgba(0, 0, 0, 0.87)',
    borderBottomWidth: '1px',
    ...BORDER_STYLE,
  },

  thcell: {
    ...BORDER_STYLE,
    borderBottomWidth: '2px',
    padding: '16px',
    lineHeight: '1.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },

  row: {
    borderBottomWidth: '1px',
    ...BORDER_STYLE,
  },

  tcell: {
    fontWeight: '400',
    fontSize: '1.1rem',
    lineHeight: '1.43',
    padding: '16px',
    color: '#000',
  }
};

export default GridStyles;