"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./Web-Layouts/Web-Header/WebHeader.js
var WebHeader = __webpack_require__(811);
;// CONCATENATED MODULE: external "@mui/icons-material/ChatBubbleOutline"
const ChatBubbleOutline_namespaceObject = require("@mui/icons-material/ChatBubbleOutline");
var ChatBubbleOutline_default = /*#__PURE__*/__webpack_require__.n(ChatBubbleOutline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowForward"
const ArrowForward_namespaceObject = require("@mui/icons-material/ArrowForward");
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_namespaceObject);
;// CONCATENATED MODULE: ./component/HeroSection.jsx




const HeroSection = ()=>{
    const { 0: isImageVisible , 1: setImageVisible  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const handleResize = ()=>{
            setImageVisible(window.innerWidth > 992);
        };
        handleResize();
        if (false) {}
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container-fluid",
        id: "home",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `col-12 col-md-6 col-lg-6 ${!isImageVisible && "col-md-12"}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hero_heading",
                            children: "Empower Your Digital Transformation Journey"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hero_para",
                            children: "At Knewton Consulting we offer a comprehensive range of services to fuel your digital success."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-5 d-flex flex-column flex-sm-row ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://wa.me/qr/47O6U47IHJNZD1",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        type: "button",
                                        className: "hero__button button_margin",
                                        children: [
                                            "Let’s Talk",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((ChatBubbleOutline_default()), {
                                                style: {
                                                    width: "24px",
                                                    height: "24px",
                                                    marginLeft: "3px"
                                                }
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#ourservices",
                                    className: "pointer mt-3 ",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "hero_services mobile-padding mt-3",
                                        children: [
                                            "Check our Services",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((ArrowForward_default()), {
                                                style: {
                                                    width: "24px",
                                                    height: "24px",
                                                    marginLeft: "0px",
                                                    color: "#ffb400",
                                                    cursor: "pointer"
                                                }
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                isImageVisible && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-12 col-md-6 col-lg-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "images/landing-img.png",
                        className: "img-fluid",
                        alt: "Landing"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const component_HeroSection = (HeroSection);

;// CONCATENATED MODULE: ./component/OurServices.jsx


const OurServices = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-color ",
        id: "ourservices",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container mt-4 ",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row service_card",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center mt-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "OUR SERVICES"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "serivce-text",
                                children: "Fueling Your Digital Success"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 com-md-4 col-lg-4 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card ",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card-body text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/web.png",
                                        height: "120px",
                                        width: "120px",
                                        className: "mt-3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Web development"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "We provide top-notch web development solutions, leveraging the latest technologies and frameworks. Our team crafts visually appealing, responsive, and feature-rich websites that enhance your online presence and captivate your audience."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 com-md-4 col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card-body text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/ui.png",
                                        height: "120px",
                                        width: "120px",
                                        className: "mt-3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "UI/UX Design"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "With a deep understanding of user behavior and design principles, we craft exceptional UI/UX experiences that delight your users. We focus on creating intuitive interfaces, seamless interactions, and visually stunning designs that enhance user satisfaction and drive engagement."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 com-md-4 col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card-body text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/Marketing.png",
                                        height: "120px",
                                        width: "120px",
                                        className: "mt-3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Digital Marketing "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Our digital marketing services help you reach your target audience, improve brand visibility, and drive conversions. We employ a data-driven approach, utilizing SEO, PPC, social media marketing, and content marketing to maximize your online reach and generate measurable results."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 com-md-4 col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card-body text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/Mobile App.png",
                                        height: "120px",
                                        width: "120px",
                                        className: "mt-3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Mobile App Development"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "From concept to deployment, we specialize in developing customized mobile apps for various platforms, including iOS and Android. Our experts create intuitive, user-friendly apps that engage users and deliver exceptional user experiences."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 com-md-4 col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card-body text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/web.png",
                                        height: "120px",
                                        width: "120px",
                                        className: "mt-3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Quality Assurance "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "We ensure that your software solutions are robust, reliable, and bug-free. Our dedicated QA team conducts comprehensive testing, identifying and resolving any issues to guarantee a seamless user experience and optimal performance."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 com-md-4 col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card-body text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/web.png",
                                        height: "120px",
                                        width: "120px",
                                        className: "mt-3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Custom Software Developer"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "We specialize in building custom software solutions tailored to your specific business needs. Our team works closely with you to understand your requirements, develop scalable and efficient solutions, and provide ongoing support to drive your business growth."
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const component_OurServices = (OurServices);

;// CONCATENATED MODULE: ./component/AboutUs.jsx




const AboutUs = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-color ",
        id: "whoarewe",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container ",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-color page-margin",
                            children: "About Us"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-bott0m-color mt-4 h_text",
                            children: "Transforming Ideas into Digital Excellence"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-center p_text mt-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "At Knewton Consulting, we are passionate about transforming ideas into digital excellence. With a relentless pursuit of innovation and a commitment to delivering exceptional solutions, we partner with businesses across industries to help them navigate the digital landscape successfully. Our team of talented professionals combines technical expertise, creative thinking, and a customer-centric approach to deliver customized solutions that drive growth, enhance efficiency, and elevate the digital presence of our clients. With a focus on collaboration, transparency, and excellence, we strive to build long-term partnerships that create a lasting impact in the digital world."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " mt-5 text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://wa.me/qr/47O6U47IHJNZD1",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    type: "button",
                                    className: "hero__button text-center",
                                    children: [
                                        "Let’s Talk",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((ChatBubbleOutline_default()), {
                                            style: {
                                                width: "24px",
                                                height: "24px",
                                                marginLeft: "3px"
                                            }
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const component_AboutUs = (AboutUs);

;// CONCATENATED MODULE: ./component/WhyChooseUs.jsx


const WhyChooseUs = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-color pb-3",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container ",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "choose-text",
                            children: "Why Choose Us"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-12 col-md-12 col-lg-4 choose_p text_p",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex align-items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-end",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "Economic"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-end",
                                                children: "Unlock cost-effective IT solutions tailored to your needs, maximizing value without compromising quality."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/img1.png",
                                        className: "mt-2 ml-3 ms-3",
                                        width: "55px",
                                        height: "55px"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex align-items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-end",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "Professional"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-end",
                                                children: "Benefit from our deep pool of professional expertise, empowering your business with cutting-edge IT solutions and industry-leading knowledge."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/img (2).png",
                                        className: "mt-2 ml-3 ms-3",
                                        width: "55px",
                                        height: "55px"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex align-items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-end",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "Security"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-end",
                                                children: "With our IT services fortified by robust security measures, safeguarding your valuable data and protecting your digital assets."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/img (4).png",
                                        className: "mt-2 ml-3 ms-3",
                                        width: "55px",
                                        height: "55px"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 col-md-12 col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "images/Frame.png",
                            className: "img-fuild mb-3"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-12 col-md-12 col-lg-4 mb-5 ps-3 choose_p text_p",
                        children: [
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex align-items-center mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/img (5).png",
                                        className: "mt-2 mr-3 me-3",
                                        width: "55px",
                                        height: "55px"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "Time"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Experience time-efficiency at its finest with our IT services, ensuring streamlined processes and rapid solutions."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex align-items-center mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/img (3).png",
                                        className: "mt-2 mr-3 me-3",
                                        width: "55px",
                                        height: "55px"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "24*7"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Stay connected and supported around the clock with our 24/7 availability, ensuring your IT needs are met whenever you need us."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex align-items-center mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/img (6).png",
                                        className: "mt-2 mr-3 me-3",
                                        width: "55px",
                                        height: "55px"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "User Satisfaction"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Our unwavering commitment to user satisfaction drives us to go above and beyond, ensuring your needs are not only met but exceeded at every step."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const component_WhyChooseUs = (WhyChooseUs);

;// CONCATENATED MODULE: external "@mui/material/Card"
const Card_namespaceObject = require("@mui/material/Card");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CardContent"
const CardContent_namespaceObject = require("@mui/material/CardContent");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CardMedia"
const CardMedia_namespaceObject = require("@mui/material/CardMedia");
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_namespaceObject);
;// CONCATENATED MODULE: ./component/RecentProjects.jsx





const RecentProjects = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-color pb-5 ",
        id: "recentprojects",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center mt-5 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "recent-text ",
                            children: "Recent Projects"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 col-md-4 mt-3 mb-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                            className: "shadow",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                    component: "img",
                                    alt: "",
                                    className: "img_p",
                                    image: "/images/caseIMG1 (1).png"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                    className: "line",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "simplify",
                                            children: "Hard Asset"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            target: "_blank",
                                            href: "https://hardassetsalliance.com/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "learn_button",
                                                children: "Explore WebAPP"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 col-md-4 mt-3 mb-1",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                            className: "shadow",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                    component: "img",
                                    alt: "",
                                    className: "img_p",
                                    image: "/images/caseIMG1 (2).png"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                    className: "line",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "simplify",
                                            children: "Distro Pro"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            target: "_blank",
                                            href: "https://distroproaudio.com/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "learn_button",
                                                children: "Explore WebAPP"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 col-md-4 mt-3 mb-1",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                            className: "shadow",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                    component: "img",
                                    alt: "",
                                    className: "img_p",
                                    image: "/images/caseIMG1 (3).png"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                    className: "line",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "simplify",
                                            children: "Coachr"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            target: "_blank",
                                            href: "https://www.coachr.io/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "learn_button",
                                                children: "Explore WebAPP"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 col-md-4 mt-3 mb-1",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                            className: "shadow",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                    component: "img",
                                    alt: "",
                                    className: "img_p",
                                    image: "/images/caseIMG1 (4).png"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                    className: "line",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "simplify",
                                            children: "Wayfair"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            target: "_blank",
                                            href: "https://www.wayfair.com/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "learn_button",
                                                children: "Explore WebAPP"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 col-md-4 mt-3 mb-1",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                            className: "shadow",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                    component: "img",
                                    alt: "",
                                    className: "img_p",
                                    image: "/images/caseIMG1 (5).png"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                    className: "line",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "simplify",
                                            children: "Fiter"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            target: "_blank",
                                            href: "https://get.fitr.training/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "learn_button",
                                                children: "Explore WebAPP"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 col-md-4 mt-3 mb-1",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                            className: "shadow",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                    component: "img",
                                    alt: "",
                                    className: "img_p",
                                    image: "/images/caseIMG1 (6).png"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                    className: "line",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "simplify",
                                            children: "Circle"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            target: "_blank",
                                            href: "https://circledna.com/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "learn_button",
                                                children: "Explore WebAPP"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const component_RecentProjects = (RecentProjects);

;// CONCATENATED MODULE: ./component/Imageone.jsx


const Imageone = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-color pt-5 ",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fuild ",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "images/Group 3349.png",
                            className: " image-about ",
                            width: "103px",
                            height: "110px"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "images/Ellipse 10.png",
                            className: "img-fluid image-secnd ",
                            width: "90px",
                            height: "90px"
                        })
                    ]
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./component/Imagetwo.jsx


const Imagetwo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-color ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fuild ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row ",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "images/Group 3349.png",
                                    className: "img-fluid image-secnd mt-3",
                                    width: "114px",
                                    height: "120px"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "images/Ellipse 10.png",
                                    className: "img-fluid image-about mt-3",
                                    width: "103px",
                                    height: "110px"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer_hr page_margin "
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: ./component/OurTeam.jsx



const OurTeam = ()=>{
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, 
        ]
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-color pb-5",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container pb-5",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center mt-5 ",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "recent-text p_text lh-sm",
                            children: [
                                "Meet The Awesome and Creative members of Our Team",
                                " "
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...settings,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: " text-center mt-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "images/Rectangle 29.png",
                                            className: "img-fuild "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "team_heading",
                                            children: " Brendon M"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "team_p ",
                                            children: " CEO & Founder"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: " text-center mt-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "images/Rectangle 30.png",
                                            className: "img-fuild "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "team_heading",
                                            children: " Jodi J. Appleby"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "team_p ",
                                            children: " Full Stack Developer"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: " text-center mt-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "images/Rectangle 31.png",
                                            className: "img-fuild "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "team_heading",
                                            children: " Justin S. Meza"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "team_p ",
                                            children: " Graphic Designer"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: " text-center mt-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "images/Rectangle 32.png",
                                            className: "img-fuild "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "team_heading",
                                            children: " Susan T. Smith"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "team_p ",
                                            children: " UI/UX Designer"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: external "@mui/icons-material/Star"
const Star_namespaceObject = require("@mui/icons-material/Star");
var Star_default = /*#__PURE__*/__webpack_require__.n(Star_namespaceObject);
;// CONCATENATED MODULE: ./component/OurCustomer.jsx




const OurCustomer = ()=>{
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, 
        ]
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-color recent-p",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container customer_card ",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center mt-5 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "recent-text p_text lh-sm",
                            children: "What Our Customer Say About Us"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...settings,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: " mt-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card shadow",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "images/“.png",
                                                width: "60px",
                                                height: "38px",
                                                className: "mt-4 ms-5"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "card-body",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-start",
                                                        children: "I highly recommend Knewton Consulting . They was attentive to our needs and worked tirelessly to find us the perfect Website. We couldn't be happier with our new place!"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "d-flex align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "images/Ellipse 15.png",
                                                                width: "50px",
                                                                height: "50px",
                                                                className: "ms-2",
                                                                alt: "Avatar"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "d-flex flex-grow-1 justify-content-between",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "customer_name",
                                                                        children: "Barbara D. Smith"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "star_icon",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: " mt-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card shadow",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "images/“.png",
                                                width: "60px",
                                                height: "38px",
                                                className: "mt-4 ms-5"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "card-body",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-start",
                                                        children: "I highly recommend Knewton Consulting . They was attentive to our needs and worked tirelessly to find us the perfect Website. We couldn't be happier with our new place!"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "d-flex align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "images/Ellipse 15.png",
                                                                width: "50px",
                                                                height: "50px",
                                                                className: "ms-2",
                                                                alt: "Avatar"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "d-flex flex-grow-1 justify-content-between",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "customer_name",
                                                                        children: "Barbara D. Smith"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "star_icon",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: " mt-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card shadow",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "images/“.png",
                                                width: "60px",
                                                height: "38px",
                                                className: "mt-4 ms-5"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "card-body",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-start",
                                                        children: "I highly recommend Knewton Consulting . They was attentive to our needs and worked tirelessly to find us the perfect Website. We couldn't be happier with our new place!"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "d-flex align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "images/Ellipse 15.png",
                                                                width: "50px",
                                                                height: "50px",
                                                                className: "ms-2",
                                                                alt: "Avatar"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "d-flex flex-grow-1 justify-content-between",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "customer_name",
                                                                        children: "Barbara D. Smith"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "star_icon",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                                style: {
                                                                                    fontSize: "18px"
                                                                                }
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const component_OurCustomer = (OurCustomer);

;// CONCATENATED MODULE: ./component/ContactUs.jsx


const ContactUs = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-color",
        id: "contactus",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container customer_card ",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center mt-2 mb-3 ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "recent-text p_text lh-sm",
                                children: [
                                    "Contact ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "contact_text",
                                        children: "Us"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center p_text mt-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Our dedicated support team is ready to assist you and provide the best IT solutions tailored to your needs. Contact us today and let's build a seamless digital experience together!"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-12 col-md-6 col-lg-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                placeholder: "Name",
                                className: "w-75 mb-5"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                placeholder: "E-mail",
                                className: "w-75 mb-5"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                type: "text",
                                className: "w-75 mb-4",
                                row: "15",
                                placeholder: "Message"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " form-check col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "checkbox",
                                            className: "form-check-input form-check-icon",
                                            required: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "I would like to receive the newsletter."
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "submit__button mt-4 mb-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    className: "button-trigger",
                                    children: "Submit"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-12 col-md-6 col-lg-6 map-responsive",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin",
                                width: "473px",
                                height: "229px",
                                allowfullscreen: "",
                                loading: "lazy"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex mt-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-location-dot icon-2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "ps-2",
                                        children: "NYC, Australia"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "tel:+61 433 3059 19",
                                className: "d-flex ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-phone icon-2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "ps-2",
                                        children: "+61 433 3059 19"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "mailto:aamirraza@gmail.com",
                                className: "d-flex ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-regular fa-envelope icon-2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "ps-2",
                                        children: "aamirraza@gmail.com"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex mb-4 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.facebook.com/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa-brands fa-facebook icon-2 me-2"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.instagram.com/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa-brands fa-instagram icon-2 mx-2"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://twitter.com/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa-brands fa-twitter icon-2 mx-2"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://dribbble.com/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa-brands fa-dribbble icon-2 mx-2"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const component_ContactUs = (ContactUs);

// EXTERNAL MODULE: ./Web-Layouts/Web-Footer/WebFooter.js
var WebFooter = __webpack_require__(247);
;// CONCATENATED MODULE: ./pages/index.js














function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(WebHeader/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pageWrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(component_HeroSection, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "f_hr "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(component_OurServices, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "f_hr "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Imageone, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(component_AboutUs, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Imagetwo, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(component_WhyChooseUs, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "f_hr "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(component_RecentProjects, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "f_hr "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(OurTeam, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "f_hr "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(component_OurCustomer, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "f_hr "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(component_ContactUs, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "f_hr "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(WebFooter/* default */.Z, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9], () => (__webpack_exec__(389)));
module.exports = __webpack_exports__;

})();