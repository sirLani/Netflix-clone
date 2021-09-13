import React, { useContext, useEffect, useState } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Loading, Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const [searchTerm, setSearchTerm] = useState('')
  const user = firebase.auth().currentUser || {};
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
          <Header.Search searchTerm= {searchTerm} setSearchTerm ={setSearchTerm}/>
              <Header.Profile>
                  <Header.Picture src= {user.photoURL}/>
                  <Header.Dropdown>
                      <Header.Group>
                      <Header.Picture src= {user.photoURL}/>
                      <Header.TextLink>{user.displayName}</Header.TextLink>
                      </Header.Group>
                      <Header.Group>
                          <Header.TextLink onClick ={() => firebase.auth().signOut}>Sign Out</Header.TextLink>
                      </Header.Group>
                  </Header.Dropdown>
              </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            at processTicksAndRejections (internal/process/task_queues.js:93:5)
            (node:23132) UnhandledPromiseRejectionWarning: Unhandled promise
            rejection. This error originated either by throwing inside of an
            async function without a catch block, or by rejecting a promise
            which was not handled with .catch(). To terminate the node process
            on unhandled promise rejection, use the CLI flag
            `--unhandled-rejections=strict` (see
            https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode).
            (rejection id: 5186)
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
