import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from './Invoice.module.css'

import {
    Card,
    Typography,
    Col,
    Row,
    List,
    Avatar,
    Divider,
    Tag,
    Button,
} from "antd";
import Icon from "@ant-design/icons";

// import PageHeading from "components/shared-components/PageHeading/PageHeading";
// import Modal from "components/UI/Modal";

import logo from "assets/images/SIA.png";
// import { ItemsAndServicesPageIcon } from "assets/svg/icon";
// import HandBagImg from "assets/HandBag.png";
// import SneakersImg from "assets/Sneakers.png";
// import { SendIcon } from "../../svgIcons";
// import { PdfIcon } from "../../svgIcons";

// import classes from "../../ItemsAndServices/Invoices/SendInvoice/SendInvoice.module.css";
// import SendQuotationModal from "./SendQuotationModal";

const { Title, Text } = Typography;

const dataItems = [
    {
        title: "1. Seawoods North",
        // image: HandBagImg
    },
    {
        title: "1. Seawoods North",
        // image: SneakersImg
    },
];

const dataServices = ["Leather Replacement", "Shoe Shine & Polish"];

const dataQty = [1, 1];

const dataPrice = ["S$100.00", "S$100.00"];

const dataTotal = ["S$100.00", "S$100.00"];

const dataGrandTotal = [
    { text: "Subtotal", amt: "S$100.00" },
    // {
    //     text: "Discount", amt: "S$100.00",
    //     // tag: { text: "10%", color: "#0099A8" }
    // },
    // {
    //     text: "Tax/GST", amt: "S$100.00",
    //     // tag: { text: "10%", color: "#E82E2E" }
    // },
];

const dataPaymentDetails = [
    { text: "Transaction Id:", val: "N/A" },
    { text: "Payment Date:", val: "06/11/2022, 10:00 Am" },
    { text: "Payment Method", val: "Cash" },
];
const Invoice = () => {
    // const [showModal , setShowModal] = useState(false);

    // const showModalHandler = () => {
    //   setShowModal(prev => !prev);
    // }

    function printDiv(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;
        // console.log(printContents)
        document.body.innerHTML = "<html><head><title></title></head><body>" + printContents + "</body>";

        window.print();

        document.body.innerHTML = originalContents;
    }

    return (
        <React.Fragment>
            {/* {showModal && <Modal onClose={showModalHandler}><SendQuotationModal/></Modal>} */}
            {/* <PageHeading
        svg={ItemsAndServicesPageIcon}
        title="Items & Services / Quotations"
      /> */}

            <Card id="print">
                <Card className={classes.card}>
                    <div className="mt-2 mb-2">
                        <img src={logo} alt="logo" />
                    </div>
                </Card>
                <div className={classes.add_details}>
                    <div className="d-flex justify-content-between">
                        <div style={{ maxWidth: '300px' }} className="">
                            <p className={`${classes.textColor} m-0 font-weight-bolder font-size-lg`}>#123456</p>
                            <p className={`${classes.textColor} m-0 mt-2  font-weight-bolder`} >Singapore Indian Association</p>
                            <p className='m-0 mt-1' >trustcleanz@contact.com</p>
                            <p className='m-0 my-1' >510, Kampong Bahru Rd, Street 123,Singapore 456589 </p>
                            <p className='m-0' >Phone:(123) 456-7890</p>
                        </div>
                        <div className="mr-5 text-right">
                            <p className={`${classes.textColor} m-0 font-weight-bolder font-size-lg`}>Fund Requested By</p>
                            <p className={`${classes.textColor} m-0 mt-2  font-weight-bolder`}>John Smith</p>
                            <p className='m-0 mt-1' >Head of Section</p>
                            <p className='m-0 my-1' >1111 ABC Road,XYZ Tower</p>
                            <p className='m-0' >Singapore, 0023</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Row>
                        <Col span={9}>
                            <p style={{ color: '#1A3353' }} classname='font-weight-bolder font-size-md'>JOB SITES</p>
                            <List
                                dataSource={dataItems}
                                renderItem={(item) => (
                                    <List.Item key={item.title} className=" pl-0 border-0">
                                        <div className={`d-flex font-weight-bolder align-items-center ${classes.textColor}`}>
                                            <img className="mr-3" src={item.image} />
                                            {item.title}
                                        </div>
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col span={15}>
                            <Row>
                                <Col span={8}>
                                    <p style={{ color: '#1A3353' }} classname='font-weight-bolder font-size-md'>TASK TYPES</p>
                                    <List
                                        dataSource={dataServices}
                                        renderItem={(item) => (
                                            <List.Item key={item} className="pl-0 border-0">
                                                <div
                                                    style={{ height: "32px" }}
                                                    className={`d-flex align-items-center ${classes.textColor} font-weight-semibold `}
                                                >
                                                    {item}
                                                </div>
                                            </List.Item>
                                        )}
                                    />
                                </Col>
                                <Col span={4}>
                                    <p classname={`font-weight-bolder font-size-md ${classes.textColor}`}>TASKS QTY</p>
                                    <List
                                        dataSource={dataQty}
                                        renderItem={(item) => (
                                            <List.Item key={item} className="border-0">
                                                <div
                                                    style={{ height: "32px" }}
                                                    className={`d-flex align-items-center ${classes.textColor} font-weight-semibold `}
                                                >
                                                    {item}
                                                </div>
                                            </List.Item>
                                        )}
                                    />
                                </Col>
                                <Col span={6}>
                                    <p classname={`font-weight-bolder font-size-md ${classes.textColor}`}>PRICE</p>
                                    <List
                                        dataSource={dataPrice}
                                        renderItem={(item) => (
                                            <List.Item key={item} className="pl-0 border-0">
                                                <div
                                                    style={{ height: "32px" }}
                                                    className={`d-flex align-items-center ${classes.textColor} font-weight-semibold `}
                                                >
                                                    {item}
                                                </div>
                                            </List.Item>
                                        )}
                                    />
                                </Col>
                                <Col span={6}>
                                    <p classname={`font-weight-bolder font-size-md ${classes.textColor}`}>TOTAL</p>
                                    <List
                                        dataSource={dataTotal}
                                        renderItem={(item) => (
                                            <List.Item key={item} className="pl-0 border-0">
                                                <div
                                                    style={{ height: "32px" }}
                                                    className={`d-flex align-items-center ${classes.textColor} font-weight-semibold `}
                                                >
                                                    {item}
                                                </div>
                                            </List.Item>
                                        )}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Divider />
                <div className="d-flex justify-content-end">
                    <Row
                        style={{ width: "40%" }}
                        className="d-flex justify-content-start"
                    >
                        <Col span={12}>
                            <List
                                dataSource={dataGrandTotal}
                                renderItem={(item) => (
                                    <List.Item
                                        key={item.text}
                                        className="pl-0 border-0 d-flex justify-content-center"
                                    >
                                        <div style={{ color: '#72849A' }} className="d-flex align-items-center ">
                                            <p style={{ color: '#72849A' }} className="m-0">{item.text}</p>
                                            {item.tag && (
                                                <div className={`${classes.total_amt}`}>
                                                    <Tag
                                                        color={item.tag.color}
                                                        className={`h-100 w-100 ${classes.tag}`}
                                                    >
                                                        {item.tag.text}
                                                    </Tag>
                                                </div>
                                            )}
                                        </div>
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col span={12}>
                            <List
                                dataSource={dataGrandTotal}
                                renderItem={(item) => (
                                    <List.Item
                                        key={item.amt}
                                        className="pl-0 border-0 d-flex justify-content-center"
                                    >
                                        <p className={`m-0 d-flex align-items-center ${classes.textColor} font-weight-bold`}>{item.amt}</p>
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Divider />
                        <p className={`${classes.textColor} font-size-lg font-weight-bolder`}>
                            Grand Total: S$100.00
                        </p>
                    </Row>
                </div>
                {/* <Divider /> */}
            </Card>
            <div className={`d-flex justify-content-end ${classes.action}`}>
                <Button>
                    {/* <Icon component={PdfIcon} /> */}
                    Cancle
                </Button>

                <Button type="primary" className={classes.send_btn} onClick={() => { printDiv('print') }}>
                    {/* <Icon component={SendIcon} /> */}
                    Download
                </Button>
            </div>
        </React.Fragment>
    );
};

export default Invoice;
