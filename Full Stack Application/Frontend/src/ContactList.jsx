import React from "react";

const ContactList = ({ contacts, updateContact, updateCallback }) => {
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE",
            };
            const response = await fetch(`https://127.0.0.1:5000/delete_contact/${id}`, options);
            if (response.status === 200) {
                console.log("Contact deleted successfully.");
                updateCallback(); // Refresh the list after deletion
            } else {
                console.error("Failed to delete contact. Status:", response.status);
            }
        } catch (error) {
            console.error("Error occurred while deleting contact:", error);
        }
    };

    return (
        <div>
            <h2>Contacts</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>
                                <button onClick={() => updateContact(contact)}>Update</button>
                                <button onClick={() => onDelete(contact.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;