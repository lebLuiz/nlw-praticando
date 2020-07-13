function searchCompany(id){
        const local = `/company/${id}`;

        const transfer = window.location.href = local;

        return transfer;

}