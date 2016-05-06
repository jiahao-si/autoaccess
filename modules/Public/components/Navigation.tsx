import * as React from "react";
import * as classnames from "classnames";
import { FetcherState, FetchState } from "@tencent/qcloud-redux-fetcher";
import { Button } from "@tencent/qcloud-component";


export interface NavigationProps {
    namespaces: FetcherState<string[]>;
}

export class Navigation extends React.Component<NavigationProps, void> {        
    
    render() {
        const { namespaces } = this.props;
        return (
            <div className="aside" >
                <div className="menu">
                    <h2>名字空间</h2>
                    <Button>添加名字空间</Button>
                    <hr className="line-mod" />
                    <dl className="menu-list def-scroll keyboard-focus-obj">
                        <dd className="act">
                            <a className="menu-lv2" href="javascript: void(0)">
                                <span>{`名字空间`}</span>
                                <i className="white-down-icon">开</i>
                            </a>
                            <ul className="menu-sub">
                                { namespaces.loading && <li>Loading...</li> }
                                { namespaces.data.map(x => <li key={x}>{x}</li>) }
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>

        );
    }
}
