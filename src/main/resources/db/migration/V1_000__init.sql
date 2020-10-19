create table if not exists mosii.role (
    uid         uuid            not null
        constraint role_pkey primary key,
    role_type   varchar(255)    not null
);

create table if not exists mosii.character (
    uid         uuid            not null
        constraint character_pkey primary key,
    name        varchar(255)    not null,
    role_uid    uuid            not null,
    level       int             not null default 1,
    pronoun     varchar(255)    not null,
        constraint character_role_fkey
            foreign key (role_uid) references mosii.role
);