import PropTypes from 'prop-types';
import styles from './styles'

const Grid = ({ data, header }) => {
  return (
    <table style={styles.container}>
      <thead style={styles.thead}>
        <tr>
          {
            header.map((colName, index) => {
              return <th key={index} style={styles.thcell}>
                {colName}
              </th>
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((user, index) => (
          <tr key={index} style={styles.row}>
            <td style={styles.tcell}>{user.username}</td>
            <td style={styles.tcell}>{user.age}</td>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}

Grid.default = {
  data: {},
  header: []
}

Grid.defaultProps = {
  /**
   * Accepts an Object prop and render to list data.
   */
  data: PropTypes.object.isRequired,

  /**
   * Array values of Data Table column header.
   */
  header: PropTypes.array.isRequired
}

export default Grid;
