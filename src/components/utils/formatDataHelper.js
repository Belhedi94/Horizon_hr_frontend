export const buildFormatData = (employeeData) => {
    const formData = new FormData();
    for (const key in employeeData) {
        if (key === 'profileImage') {
            if (employeeData[key][0])
                formData.append(key, employeeData[key][0]);
        }
        else {
            if (typeof employeeData[key] === 'object') {
                for (const subKey in employeeData[key])
                    formData.append(`${key}[${subKey}]`, employeeData[key][subKey]);
            } else
                formData.append(key, employeeData[key]);
        }
    }

    return formData;
};