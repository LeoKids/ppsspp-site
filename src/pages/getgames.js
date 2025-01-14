import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AdResponsive from '../components/AdSense';
import Link from '@docusaurus/Link';

// This is the landing page from the "How to get games" button in PPSSPP.
// I feel it's better to have a custom page for this than to link directly into the guide.

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`How to get games`}
        description="How to get games">
        <AdResponsive />
        <section>
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h1 style={{paddingTop: "10px"}}>How to get games for PPSSPP</h1>
                <h3>What are they?</h3>
                <p>PSP games are games created for the Sony Playstation Portable, or PSP for short.
                   They are normally sold as either small plastic discs or as downloadable content.
                   To use them with PPSSPP, we must turn them into files. An "ISO file" is a raw copy
                   of a disc, which can be compressed into a "CSO", or compressed iso.
                   For instructions on how to do this yourself, see the <Link to="/docs/getting-started/dumping-games">instructions on dumping games</Link>.
                </p>

                <p>PSP games that have been downloaded from PSN onto a real PSP can be copied off the PSP and played directly.</p>

                <h3>How do I get them on my device?</h3>

                <p>If you are running the PC version of PPSSPP and you have the game you want to run as an ISO, just do File-Load,
                or use the Games tab to navigate to your game. Clicking ".." moves up a directory level.</p>

                <p>If you want to play on your Android device (or other portable), then follow these steps:</p>

                <ul>
                <li>Install PPSSPP on your device</li>
                <li>Connect the device to your PC where you are storing the ISO or CSO file. Android devices can be easily connected via USB cable.</li>
                <li>The device should show up in Windows Explorer. Now simply copy over the files to somewhere easy to remember - for example, create a folder called "PSP ISO" and copy your ISO and CSO files there.</li>
                <li>Now, start PPSSPP, navigate to your new ISOs on the Games tab, then click the game, which now should show up with an icon.</li>
                <li>The game should now start.</li>
                </ul>

                <p>That's it!</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
