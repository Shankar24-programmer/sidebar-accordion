import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
export default function Sidebar() {
    return (
        <div className="sidebar">
            <Card style={{ 'width': '18rem', 'height': '821px', 'backgroundColor': '#000000', 'display': 'flex' }}>
                <img src={require('/Users/muthusankar/Desktop/accord/rb/src/Assets/umg_logo@2x.png')} alt='logo' className="logo"/>
                <hr class="new4"></hr>
                <Accordion className="bsPrefix" defaultActiveKey="0">

                    <Accordion.Item eventKey="0">
                        <Accordion.Header><img src={require('/Users/muthusankar/Desktop/accord/rb/src/Assets/Group 197.png')} alt="icon" className="icon1"/>Dashboard</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><img src={require('/Users/muthusankar/Desktop/accord/rb/src/Assets/Group 203.png')} alt="icon" className="icon2"/>Application</Accordion.Header>
                        <Accordion.Body>
                            All Application
                        </Accordion.Body>
                        <Accordion.Body>
                            Add New
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><img src={require('/Users/muthusankar/Desktop/accord/rb/src/Assets/Group 197.png')} alt="icon" className="icon1"/>Shopify Stores</Accordion.Header>
                        <Accordion.Body>
                            All Shopify Stores
                        </Accordion.Body>
                        <Accordion.Body>
                            Add New
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><img src={require('/Users/muthusankar/Desktop/accord/rb/src/Assets/Group 197.png')} alt="icon" className="icon1"/>Authentication Providers</Accordion.Header>
                        <Accordion.Body>
                            All Authentication Providers
                        </Accordion.Body>
                        <Accordion.Body>
                            Add New
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><img src={require('/Users/muthusankar/Desktop/accord/rb/src/Assets/Group 197.png')} alt="icon" className="icon1"/>Providers</Accordion.Header>
                        <Accordion.Body>
                            All Providers
                        </Accordion.Body>
                        <Accordion.Body>
                            Add New
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>

        </div>
    )
}
