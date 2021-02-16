import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import {list, listCategories, listLatest} from './api-product.js'
import Categories from './../product/Categories'

import Products from './Products'

const useStyles = makeStyles(theme => ({
  card: {
    margin: 'auto',
    textAlign: 'center',
    // paddingTop: 10,
    // backgroundColor: '#80808024'
  },
  menu: {
    width: 200,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 130,
    verticalAlign: 'bottom',
    marginBottom: theme.spacing(2)
  },
  searchField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
    marginBottom: theme.spacing(2)

    // marginBottom: '20px'
  },
  searchButton: {
    minWidth: '20px',
    height: theme.spacing(3),
    padding: '0 8px',
    marginBottom: theme.spacing(2)

    // marginBottom: '20px'
  }
}))

export default function Search(props) {
  const classes = useStyles()

  const [values, setValues] = useState({
      category: '',
      search: '',
      results: [],
      searched: false
  })
  const handleChange = name => event => {
    setValues({
      ...values, [name]: event.target.value,
    })
  }
  const search = () => {
    if(values.search){
      list({
        search: values.search || undefined, category: values.category
      }).then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          setValues({...values, results: data, searched:true})
        }
      })
    }
  }
  const enterKey = (event) => {
    if(event.keyCode == 13){
      event.preventDefault()
      search()
    }
  }
    return (
      <div>
          <TextField
            id="search"
            label="Search products"
            type="search"
            onKeyDown={enterKey}
            onChange={handleChange('search')}
            className={classes.searchField}
            margin="normal"
          />
          <Button variant="contained" color={'primary'} className={classes.searchButton} onClick={search}>
            <SearchIcon/>
          </Button>
          <Divider/>
          <Products products={values.results} searched={values.searched}/>
      </div>
    )
}
Search.propTypes = {
  // categories: PropTypes.array.isRequired
}