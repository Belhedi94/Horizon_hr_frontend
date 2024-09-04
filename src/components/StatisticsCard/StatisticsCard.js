import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StatisticsCard = ({title, count, icon}) => {
    return (
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
                <div className="card-body p-3">
                    <div className="row">
                        <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-capitalize font-weight-bold">{title}</p>
                                <h5 className="font-weight-bolder mb-0">
                                    {count}
                                </h5>
                            </div>
                        </div>
                        <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                <FontAwesomeIcon icon={icon} style={{color: "#FFFFFF", marginTop: "15px"}} size="1x" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsCard;