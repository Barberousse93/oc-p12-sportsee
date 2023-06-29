export class performancesInfos {
    userId
    kind
    data

    constructor(data){
        this.kind={}
        this.data=[{
            value:0,
            kind:0
        },
        {
            value:0,
            kind:0
        },
        {
            value:0,
            kind:0
        },
        {
            value:0,
            kind:0
        },
        {
            value:0,
            kind:0
        },
        {
            value:0,
            kind:0
        }]

        if (data && data.userId){
            this.userId = data.userId
        } else {
            this.userId = 0
        }

        if(data && data.kind && data.kind.key){
            this.kind.key = data.kind.key
        } else {
            this.kind.key=0
        }
        if(data && data.kind && data.kind.value){
            this.kind.value = data.kind.value
        } else {
            this.kind.value=0
        }

        for(let i =0 ; i< this.data.length;i++){
            if(data && data.data && data.data[i].value){
                this.data[i].value=data.data[i].value
            } else {
                this.data[i].value=0
            }
            if(data && data.data && data.data[i].kind){
                this.data[i].kind=data.data[i].kind
            } else {
                this.data[i].kind=0
            }
        }

    }
}