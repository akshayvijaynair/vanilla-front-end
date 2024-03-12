async function registerEmployee(name, role) {
    if (name.value && role.value) {
        var empDetails = {
            name : name.value,
            role : role.value
        }
        try {
            const rawResponse = await fetch('https://reqres.in/api/users', {
                method: 'POST',
                body: JSON.stringify(empDetails),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json;charset=UTF-8"
                }
            });
            if (rawResponse.ok) {
                const response = await rawResponse.json();
                sessionStorage.setItem('user-details', JSON.stringify(response));
                alert("Employee with ID " + response.id + " successfully registered!");
            } else {
                const error = new Error();
                error.message = 'Something went wrong.';
                throw error;
            }
        } catch(e) {
            alert(e.message);
        }
    } else {
        alert("Please input both the fields in the form.");
    }
}