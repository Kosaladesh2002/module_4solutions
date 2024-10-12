var names = new Array();
names[0]="Jenifer";
names[1]="mahela";
names[2]="janidu";
names[3]="kavinda";
names[4]="jeewa";
names[5]="prasad";
names[6]="udara";
names[7]="jason";
names[8]="Root";
names[9]="jcom love";
names[10]="Kosala";

for (var i=0; i< names.lenght; i++){
    console.log(names[i]);
    if(names[i].chartAt(0)==='J'||names[i].chartAt(0)==='j'){
        console.log("Goodbye "+names[i])
    }
    else{
        console.log("Hello "+names[i])
    }
}