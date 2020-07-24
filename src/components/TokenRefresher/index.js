import { useEffect } from 'react';
import { connect } from 'react-redux';

import { getToken } from '../../helpers/account';
import { getTokenExpire } from '../../helpers/jwt';
import { getFreshToken } from '../../actions/AccountActions';

const TokenRefresher = ({ account, getFreshToken }) => {
    const TRESHOLD = 30;
    const calculate = () => {
        const token = getToken();
        const expires = getTokenExpire(token);
        const secondsToExpire = expires - Date.now() / 1000;

        return secondsToExpire;
    }


    useEffect(() => {
        const secondsToExpire = calculate() - TRESHOLD;
        const id = secondsToExpire > 0 ? setTimeout(getFreshToken, secondsToExpire * 1000) : null;
        return () => clearTimeout(id);
    }, [account, getFreshToken]);


    return null;
};

const mapStateToProps = state => {
    return { account: state.account.account }
}

export default connect(mapStateToProps, { getFreshToken })(TokenRefresher);