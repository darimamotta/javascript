sendOutStatusEmails: ['updatedOrganizations', ({updatedOrganizations}) => {
    return Promise.map(updatedOrganizations, organization => {
        // Inform the user at the start and end of the trial phase
        if (organization.exceededDays === 1 ||
            organization.exceededDays === constants.maxExceededDays + 1) {
            return OrganizationController
                .sendOutOrganizationStatusEmail({
                    req: params.req,
                    parentTrx: params.parentTrx,
                    organization
                })
                .catch(err => {
                    // We are ignoring errors here in order to at least inform the other users
                    log.error(`updateExceededDays Cronjob: Error when sending out organization status email. OrganizationId: ${organization.id} Error message: ${err.message}`);
                
                    .return(null);});
        }
    }, );
}]
}))
