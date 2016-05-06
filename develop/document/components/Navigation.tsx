import * as React from "react";
import * as classnames from "classnames";
import { getAllWikies } from "../WebAPI";

import { RootProps } from "./Home";

interface NavigationState {
    wikiExpanded?: boolean;
    exampleExpanded?: boolean;
}

export class Navigation extends React.Component<RootProps, NavigationState> {

    constructor(props, context) {
        super(props, context);
        this.state = {
            wikiExpanded: true,
            exampleExpanded: true
        };
    }

    render() {
        return (
            <div className="aside" >
                <div className="menu">
                    <h2>使用文档</h2>
                    <hr className="line-mod" />
                    <dl className="menu-list def-scroll keyboard-focus-obj">
                        <dd className={ classnames({ act: this.state.wikiExpanded }) }>
                            <a className="menu-lv2" href="javascript: void(0)" onClick={() => this.setState({ wikiExpanded: !this.state.wikiExpanded }) }>
                                <span>{`文档列表`}</span>
                                <i className="white-down-icon">开</i>
                            </a>
                            <ul className="menu-sub">
                                { this.props.wikis.data.map(x =>
                                    <li key={x.name}>
                                        <a className={classnames("menu-lv3", { act: x === this.props.activeWiki }) } href="javascript: void(0)" onClick={() => this.props.actions.wiki.select(x) }>
                                            <i className="ico-dot"></i><span>{x.title}</span>
                                        </a>
                                    </li>
                                ) }
                            </ul>
                        </dd>
                        <dd className={ classnames({ act: this.state.exampleExpanded }) }>
                            <a className="menu-lv2" href="javascript: void(0)" onClick={() => this.setState({ exampleExpanded: !this.state.exampleExpanded }) }>
                                <span>{`示例`}</span>
                                <i className="white-down-icon">开</i>
                            </a>
                            <ul className="menu-sub">
                                { this.props.examples.map(x =>
                                    <li key={x.name}>
                                        <a className={classnames("menu-lv3", { act: x === this.props.activeExample }) } href="javascript: void(0)" onClick={() => this.props.actions.example.select(x) }>
                                            <i className="ico-dot"></i><span>{x.title }</span>
                                        </a>
                                    </li>
                                ) }
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
        );
    }
}
