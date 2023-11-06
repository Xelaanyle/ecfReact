import React, { useState } from 'react';
import FormulaireVideo from './FormulaireVideo';
import ListeVideos from './ListeVideos';

function BibliothequeVideo() {
  const [afficherModal, setAfficherModal] = useState(false);
  const [videos, setVideos] = useState([
    {
      titre: 'Les Dents de la Mer',
      type: 'Film',
      annee: '2000',
      realisateur: 'Alexandre',
      genre: 'Action, Horreur',
      duree: '120 min',
      acteurs: 'Alexandre, Xelaanyle',
      vu: false,
    },
    {
      titre: 'Demon Slayer',
      type: 'Dessin Animé',
      annee: '2021',
      realisateur: 'Alexandre',
      genre: 'Animation',
      duree: '90 min',
      acteurs: 'Xelaanyle',
      vu: true,
    },
  ]);

  const ajouterVideo = (nouvelleVideo) => {
    // Vérifiez si la vidéo existe déjà
    const existe = videos.some(video => video.titre === nouvelleVideo.titre);
    if (!existe) {
      setVideos([...videos, nouvelleVideo]);
      setAfficherModal(false); // Ferme la boîte de dialogue modale après avoir ajouté la vidéo
    }
  }

  const mettreAJourVideo = (index, videoMiseAJour) => {
    // Mettez à jour la vidéo à l'index donné
    const videosMisesAJour = [...videos];
    videosMisesAJour[index] = videoMiseAJour;
    setVideos(videosMisesAJour);
  }

  const supprimerVideo = (index) => {
    // Supprimez la vidéo à l'index donné
    const videosMisesAJour = videos.filter((video, i) => i !== index);
    setVideos(videosMisesAJour);
  }

  return (
    <div>
      <h1>Ma Vidéothèque</h1>
      <ListeVideos videos={videos} mettreAJourVideo={mettreAJourVideo} supprimerVideo={supprimerVideo} />
      <button onClick={() => setAfficherModal(true)}>Ajouter un nouveau film</button>
      {afficherModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setAfficherModal(false)}>
              Fermer
            </button>
            <FormulaireVideo ajouterVideo={ajouterVideo} videos={videos} />
          </div>
        </div>
      )}
    </div>
  );
}

export default BibliothequeVideo;


