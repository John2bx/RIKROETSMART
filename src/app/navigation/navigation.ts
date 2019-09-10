import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            // {
            //     id       : 'dashboards',
            //     title    : 'Dashboards',
            //     translate: 'NAV.DASHBOARDS',
            //     type     : 'collapsable',
            //     icon     : 'dashboard',
            //     children : [
            //         {
            //             id   : 'analytics',
            //             title: 'Analytics',
            //             type : 'item',
            //             url  : '/apps/dashboards/analytics'
            //         },
            //         {
            //             id   : 'project',
            //             title: 'Project',
            //             type : 'item',
            //             url  : '/apps/dashboards/project'
            //         }
            //     ]
            // },
            {
                id       : 'calendar',
                title    : 'Calendar',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/apps/calendar'
            },
            {
                id       : 'matches',
                title    : 'Matches',
                translate: 'NAV.MATCHES',
                type     : 'item',
                icon     : 'check_circle',
                url      : '/apps/matches'
            },
            {
                id       : 'candidates',
                title    : 'Candidates',
                translate: 'NAV.CANDIDATES',
                type     : 'item',
                icon     : 'face',
                url      : '/apps/candidates'
            },
            {
                id       : 'employers',
                title    : 'Employers',
                translate: 'NAV.EMPLOYERS',
                type     : 'item',
                icon     : 'supervisor_account',
                url      : '/apps/employers'
            },
    
            {
                id       : 'mail-ngrx',
                title    : 'Mail',
                translate: 'NAV.MAIL_NGRX.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/apps/mail-ngrx',
                badge    : {
                    title    : '13',
                    translate: 'NAV.MAIL_NGRX.BADGE',
                    bg       : '#EC0C8E',
                    fg       : '#FFFFFF'
                }
            },
       
            {
                id       : 'contacts',
                title    : 'Contacts',
                translate: 'NAV.CONTACTS',
                type     : 'item',
                icon     : 'account_box',
                url      : '/apps/contacts'
            },
            {
                id       : 'to-do',
                title    : 'To-Do',
                translate: 'NAV.TODO',
                type     : 'item',
                icon     : 'check_box',
                url      : '/apps/todo',
                badge    : {
                    title: '3',
                    bg   : '#FF6F00',
                    fg   : '#FFFFFF'
                }
            },
            {
                id       : 'scrumboard',
                title    : 'Scrumboard',
                translate: 'NAV.SCRUMBOARD',
                type     : 'item',
                icon     : 'assessment',
                url      : '/apps/scrumboard'
            }
        ]
    },

];
