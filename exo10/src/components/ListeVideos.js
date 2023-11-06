import React, { useState } from "react";

function ListeVideos({ videos, mettreAJourVideo, supprimerVideo }) {
  const [indexModification, setIndexModification] = useState(-1);

  const gererModification = (index) => {
    setIndexModification(index);
  };

  const gererSauvegarde = (index) => {
    setIndexModification(-1);
  };

  const basculerStatutVu = (index) => {
    // Inversez la propriété "vu" de la vidéo à l'index donné
    const videoMiseAJour = { ...videos[index], vu: !videos[index].vu };
    mettreAJourVideo(index, videoMiseAJour);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Type</th>
          <th>Année</th>
          <th>Réalisateur</th>
          <th>Genre</th>
          <th>Durée</th>
          <th>Acteurs</th>
          <th>Vu</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {videos.map((video, index) => (
          <tr key={index}>
            <td>
              {indexModification === index ? (
                <input
                  type="text"
                  value={video.titre}
                  onChange={(e) =>
                    mettreAJourVideo(index, { ...video, titre: e.target.value })
                  }
                />
              ) : (
                video.titre
              )}
            </td>
            <td>
              {indexModification === index ? (
                <input
                  type="text"
                  value={video.type}
                  onChange={(e) =>
                    mettreAJourVideo(index, { ...video, type: e.target.value })
                  }
                />
              ) : (
                video.type
              )}
            </td>
            <td>
              {indexModification === index ? (
                <input
                  type="number"
                  value={video.annee}
                  onChange={(e) =>
                    mettreAJourVideo(index, { ...video, annee: e.target.value })
                  }
                />
              ) : (
                video.annee
              )}
            </td>
            <td>
              {indexModification === index ? (
                <input
                  type="text"
                  value={video.realisateur}
                  onChange={(e) =>
                    mettreAJourVideo(index, { ...video, realisateur: e.target.value })
                  }
                />
              ) : (
                video.realisateur
              )}
            </td>
            <td>
              {indexModification === index ? (
                <input
                  type="text"
                  value={video.genre}
                  onChange={(e) =>
                    mettreAJourVideo(index, { ...video, genre: e.target.value })
                  }
                />
              ) : (
                video.genre
              )}
            </td>
            <td>
              {indexModification === index ? (
                <input
                  type="text"
                  value={video.duree}
                  onChange={(e) =>
                    mettreAJourVideo(index, { ...video, duree: e.target.value })
                  }
                />
              ) : (
                video.duree
              )}
            </td>
            <td>
              {indexModification === index ? (
                <input
                  type="text"
                  value={video.acteurs}
                  onChange={(e) =>
                    mettreAJourVideo(index, { ...video, acteurs: e.target.value })
                  }
                />
              ) : (
                video.acteurs
              )}
            </td>
            <td>
              {indexModification === index ? (
                <input
                  type="checkbox"
                  checked={video.vu}
                  onChange={(e) =>
                    mettreAJourVideo(index, { ...video, vu: e.target.checked })
                  }
                />
              ) : video.vu ? (
                "Oui"
              ) : (
                "Non"
              )}
            </td>
            <td>
              <button onClick={() => basculerStatutVu(index)}>
                {video.vu ? "Non Vu" : "Vu"}
              </button>
              {indexModification === index ? (
                <button onClick={() => gererSauvegarde(index)}>Enregistrer</button>
              ) : (
                <button onClick={() => gererModification(index)}>Modifier</button>
              )}
              <button onClick={() => supprimerVideo(index)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListeVideos;
