import React from "react";
import {useWatch} from "react-hook-form";

const BankAccountInformation = ({register, errors, control}) => {
    const holderName = useWatch({control, name: 'bankAccount.holderName'});
    const bankName = useWatch({control, name: 'bankAccount.bankName'});
    const accountNumber = useWatch({control, name: 'bankAccount.accountNumber'});
    const rib = useWatch({control, name: 'bankAccount.rib'});

    const shouldValidateBankAccountFields = bankName || holderName || accountNumber || rib;
    return(
        <div>
            <p className="text-uppercase text-sm">Bank account information</p>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"holder_name"}>Holder name</label>
                        <input type={"text"} {...register('bankAccount.holderName', {
                            required: shouldValidateBankAccountFields ? 'Holder name is required' : false
                        })}
                               className={"form-control"}
                               placeholder={"Please type the holder name"}
                               id={"holder_name"}
                        />
                        {errors.bankAccount?.holderName && <span style={{color: 'red', fontSize: '12px'}}>{errors.bankAccount.holderName.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"bank_name"}>Bank name</label>
                        <input type={"text"} {...register('bankAccount.bankName', {
                            required: shouldValidateBankAccountFields ? 'Bank name is required' : false
                        })}
                               className={"form-control"}
                               placeholder={"Please type the bank name"}
                               id={"bank_name"}
                        />
                        {errors.bankAccount?.bankName && <span style={{color: 'red', fontSize: '12px'}}>{errors.bankAccount.bankName.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"account_number"}>Account number</label>
                        <input type={"text"} {...register('bankAccount.accountNumber', {
                            required: shouldValidateBankAccountFields ? 'Account number is required' : false
                        })}
                               className={"form-control"}
                               placeholder={"Please type the account number"}
                               id={"account_number"}
                        />
                        {errors.bankAccount?.accountNumber && <span style={{color: 'red', fontSize: '12px'}}>{errors.bankAccount.accountNumber.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"rib"}>RIB</label>
                        <input type={"text"} {...register('bankAccount.rib', {
                            required: shouldValidateBankAccountFields ? 'RIB is required' : false,
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'RIB number must contain only numbers'
                            }
                        })}
                               className={"form-control"}
                               placeholder={"Please type the RIB"}
                               id={"rib"}
                        />
                        {errors.bankAccount?.rib && <span style={{color: 'red', fontSize: '12px'}}>{errors.bankAccount.rib.message}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankAccountInformation;