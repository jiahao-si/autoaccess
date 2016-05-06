import { TabAuto, Tab, TabItem, TabBody } from "@tencent/qcloud-component";

export interface MetricTableProps {
    currentModuleName: string;
    selectModule(moduleName: string): void;
}

export class MetricTable extends React.Component<MetricTableProps, void> {

    render() {

        const props = this.props;

        const tabItems: TabItem[] = [
            {
                id: "tab-1",
                label: "Tab1"
            }, {
                id: "tab-2",
                label: "Tab2"
            }
        ];

        return (
            <div className="main">
                <div className="manage-area">
                    <Tab tabs={tabItems} 
                        selected={tabItems.find(x => x.id === this.props.currentModuleName) || tabItems[0]} 
                        onSelect={item => this.props.selectModule(item.id)}>
                        <TabBody key="tab-1">
                            Tab1 content
                        </TabBody>
                        <TabBody key="tab-2">
                            Tab2 content
                        </TabBody>
                    </Tab>
                </div>
            </div>
        );
    }
}
