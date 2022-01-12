import PropTypes from 'prop-types';
import styles from './styles'

const UserDataGrid = ({ data, header }) => {
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
          Object.keys(data).map((age, index) => (
          <tr key={index} style={styles.row}>
            <td style={styles.tcell}>{age}</td>
            <td style={styles.tcell}>{data[age]}</td>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}

UserDataGrid.default = {
  data: {},
  header: []
}

UserDataGrid.defaultProps = {
  /**
   * Accepts an Object prop and render to list data.
   */
  data: PropTypes.object.isRequired,

  /**
   * Array values of Data Table column header.
   */
  header: PropTypes.array.isRequired
}

export default UserDataGrid;
