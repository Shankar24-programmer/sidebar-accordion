import React from 'react'
import { Accordion, Card, Nav } from 'react-bootstrap'
export default function Sidebar() {
    return (
        <div className="sidebar">
            <Card style={{ 'width': '18rem', 'height': '821px', 'backgroundColor': '#000000', 'display': 'flex' }}>
                <img src={require('/Users/muthusankar/Desktop/accord/rb/src/Assets/umg_logo@2x.png')} alt='logo' className="logo" />
                <hr class="new4"></hr>
                <Accordion className="bsPrefix" defaultActiveKey="0">

                    <Accordion.Item eventKey="0">
                        <Nav.Link href='/dashboard'>
                            <Accordion.Header><img src={require('/Users/muthusankar/Desktop/accord/rb/src/Assets/Group 197.png')} alt="icon" className="icon1" />Dashboard</Accordion.Header>
                        </Nav.Link>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        
                        <Accordion.Header><img src={require('/Users/muthusankar/Desktop/accord/rb/src/Assets/Group 203.png')} alt="icon" className="icon2" /> <Nav.Link href='/applications'>Application</Nav.Link></Accordion.Header>
                        <Accordion.Body><Nav.Link href='/allapplications'>All Application</Nav.Link></Accordion.Body>
                        <Accordion.Body>
                            <Nav.Link href='/addnew'>
                            Add New
                            </Nav.Link>
                        </Accordion.Body>

                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><img src={require('/Users/muthusankar/Desktop/accord/rb/src/Assets/Group 197.png')} alt="icon" className="icon1" /><Nav.Link href='/shopifystores'>Shopify Stores</Nav.Link></Accordion.Header>
                        <Accordion.Body>
                            <Nav.Link href='/allshopifystores'>
                            All Shopify Stores
                            </Nav.Link>
                        </Accordion.Body>
                        <Accordion.Body>
                            <Nav.Link href='/addnew'>
                            Add New
                            </Nav.Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><img src={require('/Users/muthusankar/Desktop/accord/rb/src/Assets/Group 197.png')} alt="icon" className="icon1" /><Nav.Link href='/authenticationproviders'>Authentication Providers</Nav.Link></Accordion.Header>
                        <Accordion.Body>
                            <Nav.Link href='/allauthenticationproviders'>
                            All Authentication Providers
                            </Nav.Link>
                        </Accordion.Body>
                        <Accordion.Body>
                            <Nav.Link href='/addnew'>
                            Add New
                            </Nav.Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><img src={require('/Users/muthusankar/Desktop/accord/rb/src/Assets/Group 197.png')} alt="icon" className="icon1" /><Nav.Link href="/providers">Providers</Nav.Link></Accordion.Header>
                        <Accordion.Body>
                            <Nav.Link href='/allproviders'>
                            All Providers
                            </Nav.Link>
                        </Accordion.Body>
                        <Accordion.Body>
                            <Nav.Link href='/addnew'>
                            Add New
                            </Nav.Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>

        </div>
    )
}
