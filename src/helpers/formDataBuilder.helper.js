const formDataBuilder = (data) => {
    const user = new FormData();

    user.append('position_id', Number(data.position_id));
    user.append('name', data.name);
    user.append('email', data.email);
    user.append('phone', data.phone);
    user.append('photo', data.photo[0]);

    return user;
}

export { formDataBuilder }