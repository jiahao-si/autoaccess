import * as React from "react";
import { connect, Provider } from "react-redux";

import { ReduxConnectedProps, bindActionCreators, findById } from "@tencent/qcloud-lib";

import { RootState } from "../models";
import { namespaceActions, moduleActions } from "../actions/RootActions";
import { configStore } from "../stores/RootStore";

import { Navigation } from "./Navigation";
import { Main } from "./Main";

import { browserHistory, Router, Route, Link} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = configStore();

export class Home extends React.Component<any, any> {
    render() {
        return (
            <Provider store={store}>
                <HomeContent></HomeContent>
            </Provider>
        );
    }
}

const actions = { namespaceActions, moduleActions };

interface HomeContentProps extends RootState {
    actions?: typeof actions
}

@connect(
    function mapStateToProps(state: RootState) {
        return state;
    },
    function mapDispatchToProps(dispatch: Redux.Dispatch) {
        return { actions: bindActionCreators(actions, dispatch) };
    }
)
class HomeContent extends React.Component<HomeContentProps, void> {
    render() {
        return ( 
            <div>
                <div className="header">
                    <div className="topnav" id="topnav">
                        <h1>
                            <a className="logo" href="http://www.qcloud.com" title="腾讯云" data-hot="header.qcloudid" data-event="hot_tag_link">腾讯云</a>
                        </h1>
                        <div className="top-panel"></div>
                    </div>
                </div>
                <div className="container" style={{ left: 0 }}>
                    <Navigation namespaces={this.props.namespaces}></Navigation>
                    <Main currentModuleName={this.props.currentModuleName} selectModule={this.props.actions.moduleActions.select}></Main>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.props.actions.namespaceActions.fetch();
    }
}