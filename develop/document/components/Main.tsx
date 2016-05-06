import * as React from "react";
import * as marked from "marked";
import * as ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { insertCSS, slide, fade } from "@tencent/qcloud-lib";
import { RootProps } from "./Home";

insertCSS("markdown-wiki", `
.marked-wiki {
    padding: 20px;
    color: #666;
}
.marked-wiki h1, .marked-wiki h2, .marked-wiki h3, .marked-wiki h4 {
    margin: 30px 0 20px;
    font-weight: normal;
    color: black;
}
.marked-wiki h1 {
    font-size: 28px;
    margin: 0 0 30px;
}
.marked-wiki p {
    margin: 20px 0;
}

.marked-wiki ul {
    padding-left: 40px;
}

.marked-wiki ul li {
    list-style: disc;
    margin: 10px 0;
}

.marked-wiki code {
    background: #F0F0F0;
    display: inline-block;
    padding: 2px 5px;
    border-radius: 3px;
}
.marked-wiki pre, .marked-wiki pre code {
    display: block;
}
.marked-wiki blockquote {
    margin: 0;
}
.marked-wiki table {
    width: 100%;
    border-collapse: collapse;
}
.marked-wiki td, .marked-wiki th {
    border: 1px solid #999;
    padding: 2px 5px;
}
`);

const markdownRenderer = new marked.Renderer();

markdownRenderer.link = (href, title, text) => {
    return `<a href="${href}" target="_blank" title=${title}>${text}</a>`;
};

export class Main extends React.Component<RootProps, void> {

    render() {

        const props = this.props;

        function Slide({ children }: { children?: JSX.Element }) {
            return <ReactCSSTransitionGroup {...slide(undefined, undefined, 20000, 20000) }>{children}</ReactCSSTransitionGroup>;
        }

        function Wiki() {
            const wiki = props.activeWiki;
            return (
                <ReactCSSTransitionGroup transitionLeave={false} {...slide() }>
                    { wiki
                        ? <div key="content" className="marked-wiki" dangerouslySetInnerHTML={{ __html: marked(wiki.content, { gfm: true, tables: true, renderer: markdownRenderer }) }}></div>
                        : <noscript key="hidden" />
                    }
                </ReactCSSTransitionGroup>
            )
        }

        function Example() {
            const example = props.activeExample;

            return (
                <ReactCSSTransitionGroup transitionLeave={false} {...slide() }>
                    { example
                        ? <div key="content">
                            <div className="manage-area-title">
                                <h2>{ example.title }</h2>
                            </div>
                            <div className="manage-area-content">
                                { example.container }
                            </div>
                        </div>
                        : <noscript key="hidden"/>
                    }
                </ReactCSSTransitionGroup>
            );
        }

        return (
            <div className="main">
                <div className="manage-area">
                    { Wiki() }
                    { Example() }
                </div>
            </div>
        );
    }
}