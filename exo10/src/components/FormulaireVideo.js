import React, { useState } from 'react';

function FormulaireVideo({ ajouterVideo, videos }) {
  const [nouvelleVideo, setNouvelleVideo] = useState({
    titre: '',
    type: '',
    annee: '',
    realisateur: '',
    genre: '',
    duree: '',
    acteurs: '',
    vu: false,
  });

  const [montrerAlerteDoublon, setMontrerAlerteDoublon] = useState(false);

  const gererChangement = (e) => {
    const { name, value } = e.target;
    setNouvelleVideo({
      ...nouvelleVideo,
      [name]: value,
    });
  };

  const soumettreFormulaire = (e) => {
    e.preventDefault();

    // Vérifiez si le titre existe déjà dans la liste
    const existe = videos.some(video => video.titre === nouvelleVideo.titre);

    if (existe) {
      // Affichez l'alerte si le titre existe déjà
      setMontrerAlerteDoublon(true);
    } else {
      // Sinon, ajoutez la vidéo à la liste
      ajouterVideo(nouvelleVideo);

      // Réinitialisez le formulaire
      setNouvelleVideo({
        titre: '',
        type: '',
        annee: '',
        realisateur: '',
        genre: '',
        duree: '',
        acteurs: '',
        vu: false,
      });

      // Masquez l'alerte s'il était affiché
      setMontrerAlerteDoublon(false);
    }
  };

  return (
    <form onSubmit={soumettreFormulaire}>
      <div>
        <label htmlFor="titre">Titre :</label>
        <input
          type="text"
          id="titre"
          name="titre"
          value={nouvelleVideo.titre}
          onChange={gererChangement}
          required
        />
      </div>
      <div>
        <label htmlFor="type">Type :</label>
        <input
          type="text"
          id="type"
          name="type"
          value={nouvelleVideo.type}
          onChange={gererChangement}
          required
        />
      </div>
      <div>
        <label htmlFor="annee">Année de sortie :</label>
        <input
          type="number"
          id="annee"
          name="annee"
          value={nouvelleVideo.annee}
          onChange={gererChangement}
          required
        />
      </div>
      <div>
        <label htmlFor="realisateur">Réalisateur :</label>
        <input
          type="text"
          id="realisateur"
          name="realisateur"
          value={nouvelleVideo.realisateur}
          onChange={gererChangement}
          required
        />
      </div>
      <div>
        <label htmlFor="genre">Genre :</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={nouvelleVideo.genre}
          onChange={gererChangement}
          required
        />
      </div>
      <div>
        <label htmlFor="duree">Durée :</label>
        <input
          type="text"
          id="duree"
          name="duree"
          value={nouvelleVideo.duree}
          onChange={gererChangement}
          required
        />
      </div>
      <div>
        <label htmlFor="acteurs">Acteurs :</label>
        <input
          type="text"
          id="acteurs"
          name="acteurs"
          value={nouvelleVideo.acteurs}
          onChange={gererChangement}
          required
        />
      </div>
 
      <button type="submit">Ajouter une vidéo</button>
      {montrerAlerteDoublon && (
        <div className="alerte">Une vidéo avec ce titre existe déjà.</div>
      )}
    </form>
  );
}

export default FormulaireVideo;
