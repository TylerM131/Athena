import React from 'react';

import PageTitle from '../components/PageTitle';
import ResetPasswordBox from '../components/ResetPasswordBox';

import './ConfirmEmailPWPage.css';


const ResetPasswordPage = () =>
{

    return(
        <div class="fpp">
            <PageTitle />
            <ResetPasswordBox />
        </div>
    );
};

export default ResetPasswordPage;