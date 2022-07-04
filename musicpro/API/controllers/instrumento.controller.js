
import { Instrumento } from "../models/Instrumento.js";

//CRUD

export const getInstrumentos = async (req, res) => {
    try {
        const instrumentos = await Instrumento.find({ uid: req.uid });
        return res.json({ instrumentos });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error de servidor" });
    }
};

export const getInstrumento = async (req, res) => {
    try {
        const { serieProducto } = req.params;
        const instrumento = await Instrumento.findOne({ serieProducto });

        if (!instrumento) return res.status(404).json({ error: "No existe este Instrumento" });
        

        return res.json({ instrumento });
    } catch (error) {
        console.log(error);
        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato id incorrecto" });
        }
        return res.status(500).json({ error: "error de servidor" });
    }
};


export const createInstrumento = async (req, res) => {
    try {
        let { serieProducto } = req.body;
        let { marca } = req.body;
        let { codigo } = req.body;
        let { nombre } = req.body;
        let { serie } = req.body;
        let { stock } = req.body;

        const instrumento = new Instrumento({ serieProducto, marca, codigo, nombre, serie, stock });
        const newInstrumento = await instrumento.save();

        return res.status(201).json({ newInstrumento });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error de servidor" });
    }
};

export const removeInstrumento = async (req, res) => {
    try {
        const { id } = req.params;
        const instrumento = await Instrumento.findById(id);

        if (!instrumento) return res.status(404).json({ error: "No existe el Instrumento" });


        await instrumento.remove();

        return res.json({ instrumento });
    } catch (error) {
        console.log(error);
        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato id incorrecto" });
        }
        return res.status(500).json({ error: "error de servidor" });
    }
};

export const updateInstrumento = async (req, res) => {
    try {
        const { id } = req.params;
        let { serieProducto } = req.body;
        let { marca } = req.body;
        let { codigo } = req.body;
        let { nombre } = req.body;
        let { serie } = req.body;
        let { stock } = req.body;


        const instrumento = await Instrumento.findById(id);

        if (!instrumento) return res.status(404).json({ error: "No existe el Instrumento" });

        if(serieProducto){
            instrumento.serieProducto = serieProducto;
        }
        if(marca){
            instrumento.marca = marca;
        }
        if(codigo){
            instrumento.codigo = codigo;
        }
        if(nombre){
            instrumento.nombre = nombre;
        }
        if(serie){
            instrumento.serie = serie;
        }
        if(stock){
            instrumento.stock = stock;
        }

        await instrumento.save();

        return res.json({ instrumento });
    } catch (error) {
        console.log(error);
        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato id incorrecto" });
        }
        return res.status(500).json({ error: "error de servidor" });
    }
};
