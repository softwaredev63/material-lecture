import {
  primaryColor,
  lightPrimaryColor,
  whiteColor,
  secondaryColor,
  headerHeight,
  horizontalPadding,
} from 'assets/jss/constants'
const secondaryHeaderStyle = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100% - 44px)', // horizontal padding * 2
    height: headerHeight,
    padding: '0px ' + horizontalPadding,
  },
  searchArea: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    minWidth: '200px',
  },
  videoButton: {
    width: '120px',
    height: '37px',
    backgroundColor: primaryColor,
    '@media only screen and (min-width: 1200px)': {
      marginLeft: '75px',
      marginRight: '130px',
    },
    '@media only screen and (max-width: 1200px)': {
      marginLeft: '20px',
      marginRight: '20px',
    },
    color: whiteColor,
    fontFamily: 'RobotoMedium',
    fontSize: '14px',
    lineHeight: '1.14',
    letterSpacing: '1.25px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: lightPrimaryColor,
    },
  },
  alarmBadge: {
    backgroundColor: secondaryColor,
    top: '7px',
    left: '11px',
    height: '7px',
    width: '7px',
    minWidth: '7px',
    borderRadius: '3.5px',
  },
  marginLeft: {
    marginLeft: '30px',
  },
}

export default secondaryHeaderStyle
