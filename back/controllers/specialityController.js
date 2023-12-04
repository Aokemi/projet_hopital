import Speciality from "../models/specialityModel.js";

// Je récupère toutes les spécialités dans la BDD
export const GetSpecialities = async (req, res) => {
  try {
    const specialities = await Speciality.find({});
    res.json(specialities)
  } catch (err) {
    res.json({ message: "Aucune spécialité trouvée" })
  }
}

// Je peux ajouter des spécialités dans la BDD
export const AddSpeciality = async (req, res) => {
  try {
    const {name, specialists, floor} = req.body
    const speciality = new Speciality({name, specialists, floor})
    await speciality.save()
    res.json({ message: "Nouvelle spécialité créée"})
  } catch(err) {
    res.json({ message: "Erreur lors de la tentative d'ajout d'une spécialité"})
  }
}

// J'obtiens les spécialités dans la BDD une par une grâce au paramètre dynamique
export const GetSpeciality = async(req, res) =>{
  try {
    const {id} = req.params
    const oneSpeciality = await Speciality.findOne({_id: id})
    res.json(oneSpeciality)
  } catch (err) {
    res.json({ message: "Aucune spécialité trouvée"})
  }
}

// Je peux éditer une spécialité dans la BDD
export const EditSpeciality = async (req, res) => {
  try {
    const {id} = req.params
    await Speciality.updateOne({_id: id}, req.body) // On va chercher dans la BDD la spécialité qui correspond à l'ID donné (gestion du paramètre dynamique) et on le met à jour dans le formulaire req.body
    res.json({ message: "Succès de l'edit"})
  } catch(err) {
    res.json({ message: "Erreur lors de la tentative d'update d'une spécialité"})
  }
}

// Je peux supprimer une spécialité dans la BDD
export const DeleteSpeciality = async (req, res) =>{
  try {
    const {id} = req.params
    await Speciality.deleteOne({_id: id})
    res.json({ message: "La spécialité a bien été supprimée"})
  } catch(err){
    res.json({ message: "Erreur lors de la tentative de suppression d'une spécialité"})
  }
}

// J'obtiens la liste de tous les spécialistes dans la BDD
export const GetAllSpecialists = async(req, res) => {
  try {
    const specialists = await Speciality.distinct("specialists")
    res.json(specialists)
  } catch(err) {
    res.json({ message: "Impossible de récupérer la liste des spécialistes"})
  }
}