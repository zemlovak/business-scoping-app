import { Level1BP } from "../Level1BP/Level1BP";
import { Level2BP } from "../Level2BP/Level2BP";
import { Level3BA } from "../Level3BA/Level3BA";
import Level4BC from "../Level4BC/Level4BC";

export function MainContent() {
  return (
    <>
      <div className="min-h-[20px] grid grid-cols-1 mt-4">
        <Level1BP>
          <Level2BP>
            <Level3BA>
              <Level4BC />
              <Level4BC />
              <Level4BC />
            </Level3BA>
            <Level3BA>
              <Level4BC />
            </Level3BA>
          </Level2BP>
          <Level2BP>
            <Level3BA>
              <Level4BC />
              <Level4BC />
              <Level4BC />
            </Level3BA>
          </Level2BP>
          <Level2BP>
            <Level3BA>
              <Level4BC />
              <Level4BC />
            </Level3BA>
          </Level2BP>
        </Level1BP>

        <Level1BP>
          <Level2BP>
            <Level3BA>
              <Level4BC />
            </Level3BA>
            <Level3BA>
              <Level4BC />
              <Level4BC />
            </Level3BA>
          </Level2BP>
          <Level2BP>
            <Level3BA>
              <Level4BC />
            </Level3BA>
          </Level2BP>
          <Level2BP>
            <Level3BA>
              <Level4BC />
            </Level3BA>
          </Level2BP>
        </Level1BP>

        <Level1BP>
          <Level2BP>
            <Level3BA>
              <Level4BC />
            </Level3BA>
            <Level3BA>
              <Level4BC />
              <Level4BC />
            </Level3BA>
          </Level2BP>
          <Level2BP>
            <Level3BA>
              <Level4BC />
              <Level4BC />
            </Level3BA>
          </Level2BP>
          <Level2BP>
            <Level3BA>
              <Level4BC />
            </Level3BA>
          </Level2BP>
        </Level1BP>

        <Level1BP>
          <Level2BP>
            <Level3BA>
              <Level4BC />
              <Level4BC />
            </Level3BA>
          </Level2BP>
          <Level2BP>
            <Level3BA>
              <Level4BC />
            </Level3BA>
            <Level3BA>
              <Level4BC />
            </Level3BA>
          </Level2BP>
          <Level2BP>
            <Level3BA>
              <Level4BC />
              <Level4BC />
              <Level4BC />
              <Level4BC />
            </Level3BA>
          </Level2BP>
        </Level1BP>
      </div>
    </>
  );
}

export default MainContent;
