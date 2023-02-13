var printer = require("printer");
const { Label, PrintDensity, PrintDensityName, Spacing,Box, Text, FontFamily, FontFamilyName, Alignment, AlignmentValue,Grid,Size,SizeType } = require('jszpl');


class Zebra {
    constructor() {
        const label = new Label();
        label.printDensity = new PrintDensity(PrintDensityName['8dpmm']);
        label.width = 80;
        label.height = 40;
        label.padding = new Spacing(0);

        const title = new Text();
        label.content.push(title);
        title.fontFamily = new FontFamily(FontFamilyName.F);
        title.text = 'T4S SAFELOGGY';
        title.characterHeight = 30;

        const t4slogo = new Text();
        label.content.push(t4slogo);
        t4slogo.fontFamily = new FontFamily(FontFamilyName.D);
        t4slogo.text = 'T4S';
        t4slogo.characterHeight = 50;


        this.zpl = label.generateZPL();
    }


    print(txt){
        printer.printDirect({data:this.zpl,printer:'ZDesigner GC420t (EPL)',type:'RAW',
            success:function(jobID){
                console.log("sent to printer with ID: "+jobID);
            },error:function(err){
                console.log(err);
            }
        });

        return this.zpl;
    
    }

}
module.exports = new Zebra();