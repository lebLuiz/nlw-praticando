function searchCompany(id) {
        // const local = `/company/${id}`;

        const local = `/create-company/${id}`;

        const transfer = window.location.href = local;

        return transfer;

}