import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/routes/Route';

import SignIn from '~/pages/SignIn';

import Students from '~/pages/Students';
import CreateStudent from '~/pages/Students/create';
import UpdateStudent from '~/pages/Students/update';

import Packs from '~/pages/Packs';
import CreatePack from '~/pages/Packs/create';
import UpdatePack from '~/pages/Packs/update';

import Enrolls from '~/pages/Enrolls';
import CreateEnrolls from '~/pages/Enrolls/create';
import UpdateEnrolls from '~/pages/Enrolls/update';

import HelpOrders from '~/pages/HelpOrders';
import UpdateHelpOrders from '~/pages/HelpOrders/update';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/students/new" component={CreateStudent} isPrivate />
      <Route path="/students/:id" component={UpdateStudent} isPrivate />

      <Route path="/packs" exact component={Packs} isPrivate />
      <Route path="/packs/new" component={CreatePack} isPrivate />
      <Route path="/packs/:id" component={UpdatePack} isPrivate />

      <Route path="/enrolls" exact component={Enrolls} isPrivate />
      <Route path="/enrolls/new" component={CreateEnrolls} isPrivate />
      <Route path="/enrolls/:id" component={UpdateEnrolls} isPrivate />

      <Route path="/help-orders" exact component={HelpOrders} isPrivate />
      <Route path="/help-orders/:id" component={UpdateHelpOrders} isPrivate />
    </Switch>
  );
}
