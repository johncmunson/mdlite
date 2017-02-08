import React from 'react'
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs'

class Tabs extends React.Component {
    render() {
        return (
            <ReactTabs
                selectedIndex={0}
            >
                <TabList>
                    <Tab>Foo</Tab>
                    <Tab>Bar</Tab>
                    <Tab>Baz</Tab>
                </TabList>
                <TabPanel>
                    <h2>Hello from Foo</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Hello from Bar</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Hello from Baz</h2>
                </TabPanel>
            </ReactTabs>
        )
    }
}

export default Tabs
