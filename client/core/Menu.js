import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import CartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import cart from './../cart/cart-helper'
import {Image} from "@material-ui/icons";
import kashewLogo from './../assets/images/kashewlogo.png'
import Grid from "@material-ui/core/Grid";
import Search from "../product/Search";
import * as url from "url";

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#bef67a'}
  else
    return {color: '#ffffff'}
}
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return {color: '#bef67a'}
  else
    return {color: '#ffffff'}
}
const Menu = withRouter(({history}) => (
  <AppBar position="static">
    <Toolbar>
      <Link to="/">
        <IconButton>
          <img src='https://res.cloudinary.com/dvf1zpetn/image/upload/v1613623473/b0c22e909e91bb7a8734e5c2946b42f4_uqokys.png'/>
        </IconButton>
      </Link>
      {/*</Image>*/}
      {/*<Typography variant="h6" color="inherit">*/}
      {/*  Kashew*/}
      {/*</Typography>*/}
      <div>
        {/*<Link to="/">*/}
        {/*  <IconButton aria-label="Home" style={isActive(history, "/")}>*/}
        {/*    <HomeIcon/>*/}
        {/*  </IconButton>*/}
        {/*</Link>*/}
        <Link to="/shops/all">
          <Button style={isActive(history, "/shops/all")}>Buy</Button>
        </Link>
        {/*<Link to="/auctions/all">*/}
        {/*  <Button style={isActive(history, "/auctions/all")}>All Auctions</Button>*/}
        {/*</Link>*/}
        <Link to="/cart">
          <Button style={isActive(history, "/cart")}>
            Cart
            <Badge invisible={false} color="secondary" badgeContent={cart.itemTotal()} style={{'marginLeft': '7px'}}>
              <CartIcon />
            </Badge>
          </Button>


        </Link>
      </div>
      <div>
        {/*<Search/>*/}

      </div>
      <div style={{'position':'absolute', 'right': '10px'}}><span style={{'float': 'right'}}>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")}><Typography>Sign up</Typography>
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")}><Typography>Sign In</Typography>
            </Button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          {auth.isAuthenticated().user.seller && (<>
            <Link to="/seller/shops"><Button style={isPartActive(history, "/seller/")}>My Listings</Button></Link>
            {/*<Link to="/myauctions"><Button style={isPartActive(history, "/myauctions")}>My Auctions</Button></Link>*/}
            </>
          )}
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
          </Link>
          <Button color="inherit" onClick={() => {
              auth.clearJWT(() => history.push('/'))
            }}>Sign out</Button>
        </span>)
      }
      </span></div>
    </Toolbar>
  </AppBar>
))

export default Menu
