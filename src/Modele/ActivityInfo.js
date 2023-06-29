export class ActivityInfo{
    userId
    sessions

    constructor(data){
        this.sessions=[{
            day:'',
            kilogram:0,
            calories:0
        },
        {
            day:'',
            kilogram:0,
            calories:0
        },
        {
            day:'',
            kilogram:0,
            calories:0
        },
        {
            day:'',
            kilogram:0,
            calories:0
        },
        {
            day:'',
            kilogram:0,
            calories:0
        },
        {
            day:'',
            kilogram:0,
            calories:0
        },{
            day:'',
            kilogram:0,
            calories:0
        }]

        if (data && data.userId){
            this.userId = data.userId
        } else {
            this.userId = 0
        }

        for(let  i = 0; i < this.sessions.length; i++){
            // console.log('data.sessions[i].day',data.sessions[i].day)
            if(data && data.sessions && data.sessions[i].day){
                this.sessions[i].day=data.sessions[i].day
            } else {
                this.sessions[i].day='1900-01-01'
            }
            if(data && data.sessions && data.sessions[i].kilogram){
                this.sessions[i].kilogram=data.sessions[i].kilogram
            } else {
                this.sessions[i].kilogram=0
            }
            if(data && data.sessions && data.sessions[i].calories){
                this.sessions[i].calories=data.sessions[i].calories
            } else {
                this.sessions[i].calories=0
            }
        }
    }
}