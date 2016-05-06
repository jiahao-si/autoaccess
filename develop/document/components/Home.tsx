import * as React from "react";
import { connect, Provider } from "react-redux";

import { ReduxConnectedProps, bindActionCreators, findById } from "@tencent/qcloud-lib";

import { RootState } from "../models";
import { wikiActions, exampleActions } from "../actions/RootActions";
import { configStore } from "../stores/RootStore";

import { Navigation } from "./Navigation";
import { Main } from "./Main";

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

export interface RootProps extends RootState {
    actions?: {
        wiki: typeof wikiActions,
        example: typeof exampleActions
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    actions: {
        wiki: wikiActions,
        example: exampleActions
    }
}, dispatch);

@connect(state => state, mapDispatchToProps)
class HomeContent extends React.Component<RootProps, void> {
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
                    <Navigation {...this.props}></Navigation>
                    <Main {...this.props}></Main>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.actions.wiki.fetch();
    }
}