import React from "react";

const BankAccountInformation = ({register, errors}) => {
    return(
        <div>
            <p className="text-uppercase text-sm">Bank account information</p>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="holder_name" className="form-control-label">Holder name</label>
                        <input id={"holder_name"} className={"form-control"} type="text" placeholder={"Please type the holder name"}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="bank_name" className="form-control-label">Bank name</label>
                        <input id={"bank_name"} className={"form-control"} type="text" placeholder={"Please type the bank name"}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="account_number" className="form-control-label">Account number</label>
                        <input id={"account_number"} className={"form-control"} type="number" placeholder={"Please type the account number"}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="rib" className="form-control-label">RIB</label>
                        <input id={"rib"} className={"form-control"} type="number" placeholder={"Please type the RIB"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankAccountInformation;