import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => {
  return (
    <div>
      <label htmlFor="">Find contacts by name
        <br/>
          <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  )
}

Filter.propType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Filter;