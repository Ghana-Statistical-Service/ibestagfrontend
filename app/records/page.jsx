'use client';
import { URI } from '@/function/uri';
import UiButton from '@/ui/button';
import CardUi from '@/ui/Card';
import CircleUi from '@/ui/Circle';
import LoaderUi from '@/ui/LoaderUi';
import NavBar from '@/ui/NavBar';
import TableUI from '@/ui/Table';
import TextUi from '@/ui/Text';
import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { PiArrowLeft, PiArrowRight, PiEye, PiPrinter, PiX } from 'react-icons/pi';
import Modal from 'funuicss/ui/modal/Modal';
import Button from 'funuicss/ui/button/Button';
import RowFlex from 'funuicss/ui/specials/RowFlex';
import Text from 'funuicss/ui/text/Text';
import Div from 'funuicss/ui/div/Div';
import CardFront from '@/component/CardFront';
import RowFlexUi from '@/ui/RowFlex';
import Base64Image from '@/component/Base64Image';

export default function Record() {
    const [docs, setDocs] = useState([]);
    const [modal, setModal] = useState(false);
    const [filterRegion, setFilterRegion] = useState('');
    const printRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [print_data, setprint_data] = useState(false)

    useEffect(() => {
      window.addEventListener("dblclick", () => setprint_data(false))
    }, [])
    
    
    const fetchData = async (page) => {
        setIsLoading(true);
        try {
            const res = await Axios.get(`${URI}/users?page=${page}&limit=20`);
            setDocs(res.data.users);
            setTotalPages(Math.ceil(res.data.total / 20));
            setIsLoading(false);
        } catch (err) {
            console.error(err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handlePrint = () => {
        const printContent = printRef.current.innerHTML;
        const printWindow = window.open('', '');
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(printContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    const FilterDocs = () => {
        if (docs.length > 0) {
            let res = docs.filter(doc => doc.region === filterRegion);
            return filterRegion ? res : docs;
        } else {
            return [];
        }
    };

    if (isLoading) {
        return <LoaderUi />;
    }

    const _regions = ["Ahafo" ,
    "Upper West" ,
    "Oti" ,
    "Volta" ,
    "Northern" ,
    "Ashanti",
    "region",
    "Bono East",
    "Greater Accra",
    "Central",
    "Eastern" ,
    "Western North" ,
    "Western" ,
    "Bono"]



   if(!print_data) {
    return (
        <div>
       
            <NavBar />
            <div className="margin-top-100 padding-bottom-40">
                <div className="container">
                    <CardUi 
                        funcss='roundEdgeSmall padding-20 fit'
                        body={
                            <TableUI
                                right={
                                    <RowFlexUi gap={1}>
                                        <select  
                                            className="dark800 input text-dark200 width-200-max borderless roundEdgeSmall smallInput" 
                                            onChange={(e) => {
                                                FilterDocs(docs);
                                                setFilterRegion(e.target.value);
                                            }}
                                        >
                                            <option value="">All*</option>
                                            
                                            {_regions.map(item => (
                                                item && <option key={item} value={item}>{item}</option>
                                            ))}
                                        </select>
                                        <UiButton bg='primary' rounded onClick={() => setprint_data(true)} text='Print' bold startIcon={<PiPrinter />} />
                                    </RowFlexUi>
                                }
                                funcss='text-smaller'
                                pageSize={20}
                                data={docs ? {
                                    "data": FilterDocs(),
                                    "titles": ["picture", 'Name', "Email", 'Gender', "Tel(1)", 'Tel(2)', 'Region', "District", "View"],
                                    "fields": [],
                                } : []}
                                customColumns={[
                                    {
                                        title: 'Actions',
                                        render: (data) => (
                                            <div>
                                                {data.profilePic ? (
                                                    <Base64Image base64String={data.profilePic} className="width-70 roundEdgeSmall" />
                                                ) : (
                                                    <div className="height-50 border padding roundEdgeSmall"></div>
                                                )}
                                            </div>
                                        ),
                                    },
                                    { title: 'Actions', render: (data) => <TextUi bold text={data.name} /> },
                                    { title: 'Actions', render: (data) => <TextUi text={data.email} /> },
                                    { title: 'Actions', render: (data) => <TextUi text={data.sex} /> },
                                    { title: 'Actions', render: (data) => <TextUi text={data.telephone1} /> },
                                    { title: 'Actions', render: (data) => <TextUi text={data.telephone2} /> },
                                    { title: 'Actions', render: (data) => <TextUi text={data.region} /> },
                                    { title: 'Actions', render: (data) => <TextUi text={data.district} /> },
                                    {
                                        title: 'Actions',
                                        render: (data) => (
                                            <CircleUi bg='primary' onClick={() => window.location.assign(`/card/${data.email}`)} size={2}>
                                                <PiEye />
                                            </CircleUi>
                                        ),
                                    }
                                ]}
                            />
                        }
                    />
                </div>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
   }else{
    return (
        <center>
            <div className="row central" ref={printRef}>
                    {FilterDocs().map((doc, i) => (
                        <div className="col sm-12 md-6 lg-6 margin-top-10" key={i}>
                            <center>
                                <CardFront data={doc} profile={doc.profilePic} />
                            </center>
                        </div>
                    ))}
                </div>
        </center>
    )
   }
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <button
                key={i}
                onClick={() => onPageChange(i)}
                className={`pagination-button central roundEdge pointer padding-5 ${i === currentPage ? 'primary' : ''}`}
            >
                {i}
            </button>
        );
    }

    return <div className="row-flex central section">
{pages} 
    </div>;
};

