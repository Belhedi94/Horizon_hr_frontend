import React from "react";

const BankAccountSwitcher = ({bankAccountSectionIsHidden, handleSwitcherButton}) => {
    return (
        <div className="form-check form-switch ps-0 mb-4">
            <input
                className="form-check-input ms-auto"
                type="checkbox"
                id="bank_account_switcher"
                checked={bankAccountSectionIsHidden}
                onChange={(e) => handleSwitcherButton(e.target.checked)}
            />
            <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="bank_account_switcher">
                Add bank account
            </label>
        </div>
    );
};

export default BankAccountSwitcher;