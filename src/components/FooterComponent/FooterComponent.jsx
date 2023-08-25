import { Layout, Row, Col } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import React from 'react';

const FooterComponent = () => {
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#9255fd',
        padding: '2rem',
    };

    const socialIconsStyle = {
        fontSize: '24px',
        margin: '0 12px',
        transition: 'transform 0.3s ease-in-out',
    };

    const onSocialIconHover = (e) => {
        e.target.style.transform = 'scale(1.2)';
    };

    const onSocialIconLeave = (e) => {
        e.target.style.transform = 'scale(1)';
    };

    return (
        <Footer style={footerStyle}>
            <Row justify="center">
                <Col xs={24} sm={12} md={8}>
                    <h2>Contact Us</h2>
                    <p>Email: HungleeTiki@gmail.com</p>
                    <p>Phone: +977785047</p>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <h2>Follow Us</h2>
                    <div>
                        <a href='https://www.instagram.com/lqh1811/'>
                            <InstagramOutlined
                                style={socialIconsStyle}
                                onMouseOver={onSocialIconHover}
                                onMouseLeave={onSocialIconLeave}
                            />
                        </a>

                        <a href='https://www.facebook.com/toikhongphailahung/'>
                            <FacebookOutlined
                                style={socialIconsStyle}
                                onMouseOver={onSocialIconHover}
                                onMouseLeave={onSocialIconLeave}
                            />
                        </a>
                        <a href='https://twitter.com/?lang=vi'>
                            <TwitterOutlined
                                style={socialIconsStyle}
                                onMouseOver={onSocialIconHover}
                                onMouseLeave={onSocialIconLeave}
                            />
                        </a>

                    </div>
                </Col>
                <Col xs={24} sm={24} md={8}>
                    <h2>Newsletter</h2>
                    <p>Subscribe to our newsletter for updates</p>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </Col>
            </Row>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </Footer>
    );
};

export default FooterComponent;
