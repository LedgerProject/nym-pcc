import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { routes } from '../../Routes';

// import this way so that webpack handles the chunking
const {
  RoutesHome,
  RoutesUserHome,
  RoutesUserSplash,
  RoutesUserOnboardingHome,
  RoutesUserOnboardingAuth,
  RoutesUserAppAddCovidPass,
  RoutesUserAppViewNymPassport,
  RoutesUserAppViewCovidPassHome,
  RoutesUserAppViewCovidPassShowPCC,
  RoutesUserAppViewCovidPassNewCustom,
  RoutesUserAppViewCovidPassScanVerifierCode,
  RoutesUserAppViewCovidPassConfirmVerifierCode,
} = require('../../content/index');

interface NavAwareDocsProps {
  fixedHeight?: boolean;
}

export const NavAwareDocs: React.FC<NavAwareDocsProps> = ({ fixedHeight = true }) => {
  const components = {};
  return (
    <Box sx={fixedHeight ? { maxHeight: '15vh', overflowY: 'auto' } : undefined}>
      <Switch>
        <Route exact path={routes.home}>
          <RoutesHome components={components} />
        </Route>
        <Route exact path={routes.user.home}>
          <RoutesUserSplash components={components} />
        </Route>
        <Route exact path={routes.user.app.home}>
          <RoutesUserHome components={components} />
        </Route>
        <Route exact path={routes.user.onboarding.home}>
          <RoutesUserOnboardingHome components={components} />
        </Route>
        <Route exact path={routes.user.onboarding.onboardingAuthStart}>
          <RoutesUserOnboardingAuth components={components} />
        </Route>
        <Route exact path={routes.user.onboarding.onboardingAuthPleaseWait}>
          <RoutesUserOnboardingAuth components={components} />
        </Route>
        <Route exact path={routes.user.onboarding.onboardingAuthDone}>
          <RoutesUserOnboardingAuth components={components} />
        </Route>
        <Route exact path={routes.user.app.view.nymId}>
          <RoutesUserAppViewNymPassport components={components} />
        </Route>
        <Route exact path={routes.user.app.view.covidPass.home}>
          <RoutesUserAppViewCovidPassHome components={components} />
        </Route>
        <Route exact path={routes.user.app.view.covidPass.newCustom}>
          <RoutesUserAppViewCovidPassNewCustom components={components} />
        </Route>
        <Route exact path={routes.user.app.view.covidPass.showPCC}>
          <RoutesUserAppViewCovidPassShowPCC components={components} />
        </Route>
        <Route exact path={routes.user.app.view.covidPass.scanVerifierCode}>
          <RoutesUserAppViewCovidPassScanVerifierCode components={components} />
        </Route>
        <Route exact path={routes.user.app.view.covidPass.confirmVerifierCode}>
          <RoutesUserAppViewCovidPassConfirmVerifierCode components={components} />
        </Route>
      </Switch>
    </Box>
  );
};
